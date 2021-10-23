import React, { useState, useEffect, useContext } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import SectionWrapper from './components/SectionWrapper'
import Title from './components/Title'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import { getIssueData } from '../../webapi/issueApi'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import LoadingContext from '../../contexts/loadingContext'

const Buttons = styled.div`
  width: 100%;
  min-width: calc(400px - 4rem);
  padding: 1rem 0rem;
  ${flexJustifyAlign('space-between')}
  flex-flow: row wrap;
`

const Button = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 8rem;
  height: 4rem;
  margin: 1rem;
  padding: 0.2rem 0.7rem;
  border-radius: 0.8rem;
  cursor: pointer;
  background: ${({ active, theme }) =>
    active ? theme.secondary_900 : theme.secondary_850};
  span:nth-of-type(1) {
    font-size: 1.25rem;
    color: ${({ active, color, theme }) =>
      active ? color : theme.secondary_000};
  }
  span:nth-of-type(2) {
    font-size: 1rem;
    color: ${({ active, theme }) =>
      active ? theme.primary : theme.secondary_300};
  }
`

const TitleWrapper = styled.div`
  padding: 1rem 2rem;
`

const GraphWrapper = styled.div`
  ${flexJustifyAlign('center')}
`

const ButtonContainer = ({ filter, setFilter, data, lineColor }) => {
  const allLikesNumber = data.reduce((acc, cur) => acc + cur.likes, 0)
  const allCommentsNumber = data.reduce((acc, cur) => acc + cur.comments, 0)
  const allRepliesNumber = data.reduce((acc, cur) => acc + cur.replies, 0)

  const handleSetFilter = async (filter) => {
    await setFilter(null)
    await setFilter(filter)
  }
  const ButtonArray = [
    { name: '所有資料', filterName: 'all', dataNumber: 'all data' },
    {
      name: '按讚數',
      filterName: 'likes',
      dataNumber: allLikesNumber,
      color: lineColor.likes
    },
    {
      name: '留言數',
      filterName: 'comments',
      dataNumber: allCommentsNumber,
      color: lineColor.comments
    },
    {
      name: '回覆數',
      filterName: 'replies',
      dataNumber: allRepliesNumber,
      color: lineColor.replies
    }
  ]

  return (
    <Buttons>
      {ButtonArray.map((e) => {
        return (
          <Button
            key={e.name}
            onClick={() => handleSetFilter(e.filterName)}
            active={filter === e.filterName}
            color={e.color}
          >
            <span>{e.dataNumber}</span>
            <span>{e.name}</span>
          </Button>
        )
      })}
    </Buttons>
  )
}
ButtonContainer.propTypes = {
  data: PropTypes.array,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  lineColor: PropTypes.object
}

// main component ------------------------
const GraphSection = () => {
  const [filter, setFilter] = useState('')
  const [data, setData] = useState([])
  const setIsLoading = useContext(LoadingContext)
  const { url } = useParams()

  const LINE_TYPE = 'monotone'
  const LINE_COLOR = {
    likes: '#f99',
    comments: '#3d6',
    replies: '#eb3'
  }
  const deviceWidth = document.getElementById('root').clientWidth
  const graphWidth = deviceWidth > 600 ? 600 : deviceWidth
  const graphMargin = { top: 10, right: 30, left: 0, bottom: 30 }
  const isLineShow = (filterName) => filter === 'all' || filter === filterName

  useEffect(() => {
    if (!url) return
    const doAsyncEffects = async () => {
      setIsLoading(true)
      try {
        const response = await getIssueData(url)
        const { data } = response
        if (!data.ok) throw new Error(data.message)
        setData(
          data.data.map((e) => ({
            ...e,
            date: e.date.slice(5, 10).replace(/-/, '/')
          }))
        )
        setFilter('all')
      } catch (error) {
        console.log(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    doAsyncEffects()
  }, [url])

  return (
    <SectionWrapper isGreyBackground={true}>
      <TitleWrapper>
        <Title>前台連結</Title>
        <ButtonContainer
          filter={filter}
          setFilter={setFilter}
          data={data}
          setData={setData}
          lineColor={LINE_COLOR}
        />
      </TitleWrapper>
      <GraphWrapper>
        <LineChart
          width={graphWidth}
          height={300}
          data={data}
          margin={graphMargin}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {isLineShow('likes') && (
            <Line
              type={LINE_TYPE}
              dataKey="likes"
              stroke={LINE_COLOR.likes}
              activeDot={{ r: 6 }}
            />
          )}
          {isLineShow('comments') && (
            <Line
              type={LINE_TYPE}
              dataKey="comments"
              stroke={LINE_COLOR.comments}
            />
          )}
          {isLineShow('replies') && (
            <Line
              type={LINE_TYPE}
              dataKey="replies"
              stroke={LINE_COLOR.replies}
            />
          )}
        </LineChart>
      </GraphWrapper>
    </SectionWrapper>
  )
}

export default GraphSection
