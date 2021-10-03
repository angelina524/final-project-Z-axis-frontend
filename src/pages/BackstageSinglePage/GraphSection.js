import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import PropType from 'prop-types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import SectionWrapper from './components/SectionWrapper'

const Buttons = styled.div`
  width: 100%;
  min-width: 400px;
  padding: 1rem 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
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
    font-size: 1.2rem;
    color: ${({ theme }) => theme.secondary_000};
  }
  span:nth-of-type(2) {
    color: ${({ active, theme }) =>
      active ? theme.primary : theme.secondary_300};
  }
`

const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonContainer = ({ filter, setFilter, data, setData }) => {
  useEffect(() => {
    // TODO: get real data

    // dev data
    const randomN = (num) => {
      return Math.round(Math.random() * num)
    }
    const getData = () => {
      const dataArray = []
      for (const i in Array(5).fill(0)) {
        dataArray.push({
          date: '10/1' + i,
          views: randomN(100 + i * 10),
          comments: randomN(30 - i),
          replies: randomN(10)
        })
      }
      return dataArray
    }
    setData(getData())
  }, [])

  const allViewsNumber = data.reduce((acc, cur) => acc + cur.views, 0)
  const allCommentsNumber = data.reduce((acc, cur) => acc + cur.comments, 0)
  const allRepliesNumber = data.reduce((acc, cur) => acc + cur.replies, 0)

  const handleSetFilter = async (filter) => {
    await setFilter(null)
    await setFilter(filter)
  }
  const ButtonArray = [
    { name: '所有資料', filterName: 'all', dataNumber: 'all data' },
    { name: '總瀏覽數', filterName: 'views', dataNumber: allViewsNumber },
    { name: '總留言數', filterName: 'comments', dataNumber: allCommentsNumber },
    { name: '總回覆數', filterName: 'replies', dataNumber: allRepliesNumber }
  ]

  return (
    <Buttons>
      {ButtonArray.map((e) => {
        return (
          <Button
            key={e.name}
            onClick={() => handleSetFilter(e.filterName)}
            active={filter === e.filterName}
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
  data: PropType.array,
  setData: PropType.func,
  filter: PropType.string,
  setFilter: PropType.func
}

// main component ------------------------
const GraphSection = () => {
  const [filter, setFilter] = useState('all')
  const [data, setData] = useState([])

  const LINE_TYPE = 'monotone'
  const deviceWidth = document.getElementById('root').clientWidth
  const graphWidth = deviceWidth > 600 ? 600 : deviceWidth
  const graphMargin = { top: 10, right: 30, left: 0, bottom: 30 }
  const isLineShow = (filterName) => filter === 'all' || filter === filterName

  return (
    <SectionWrapper isGreyBackground={true}>
      <ButtonContainer
        filter={filter}
        setFilter={setFilter}
        data={data}
        setData={setData}
      />
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
          {isLineShow('views') && (
            <Line
              type={LINE_TYPE}
              dataKey="views"
              stroke="#8884d8"
              activeDot={{ r: 6 }}
            />
          )}
          {isLineShow('comments') && (
            <Line type={LINE_TYPE} dataKey="comments" stroke="#82ca9d" />
          )}
          {isLineShow('replies') && (
            <Line type={LINE_TYPE} dataKey="replies" stroke="#faa" />
          )}
        </LineChart>
      </GraphWrapper>
    </SectionWrapper>
  )
}

export default GraphSection
