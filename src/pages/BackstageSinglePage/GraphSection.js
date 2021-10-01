import React, { useState } from 'react'
import styled from '@emotion/styled'
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

// dev data
const randomN = (num) => {
  return Math.round(Math.random() * num)
}
const datas = () => {
  const jsonData = []
  for (const i in Array(5).fill(0)) {
    jsonData.push({
      date: '10/1' + i,
      views: randomN(100 + i * 10),
      comments: randomN(30 - i),
      replies: randomN(10)
    })
  }
  return jsonData
}
const data = datas()

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
  background: ${({ active }) => (active ? '#ffffff' : '#f9f9f9')};
  span:nth-of-type(1) {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.secondary_000};
  }
  span:nth-of-type(2) {
    color: ${({ theme }) => theme.primary};
    ${({ active }) =>
      active ||
      `
      color: #aaaaaa;
    `}
  }
`

const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const GraphSection = () => {
  const [filter, setFilter] = useState('all')
  const deviceWidth = document.getElementById('root').clientWidth
  const graphWidth = deviceWidth > 600 ? 600 : deviceWidth
  const allViews = data.reduce((acc, cur) => acc + cur.views, 0)
  const allComments = data.reduce((acc, cur) => acc + cur.comments, 0)
  const allReplies = data.reduce((acc, cur) => acc + cur.replies, 0)

  // TODO: get real data

  const handleClick = async (filter) => {
    await setFilter(null)
    await setFilter(filter)
  }

  return (
    <SectionWrapper isGreyBackground={true}>
      <Buttons>
        <Button onClick={() => handleClick('all')} active={filter === 'all'}>
          <span>all</span>
          <span>data</span>
        </Button>
        <Button
          onClick={() => handleClick('views')}
          active={filter === 'views'}
        >
          <span>{allViews}</span>
          <span>views</span>
        </Button>
        <Button
          onClick={() => handleClick('comments')}
          active={filter === 'comments'}
        >
          <span>{allComments}</span>
          <span>comments</span>
        </Button>
        <Button
          onClick={() => handleClick('replies')}
          active={filter === 'replies'}
        >
          <span>{allReplies}</span>
          <span>replies</span>
        </Button>
      </Buttons>
      <GraphWrapper>
        <LineChart
          width={graphWidth}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {(filter === 'all' || filter === 'views') && (
            <Line
              type="monotone"
              dataKey="views"
              stroke="#8884d8"
              activeDot={{ r: 6 }}
            />
          )}
          {(filter === 'all' || filter === 'comments') && (
            <Line type="monotone" dataKey="comments" stroke="#82ca9d" />
          )}
          {(filter === 'all' || filter === 'replies') && (
            <Line type="monotone" dataKey="replies" stroke="#faa" />
          )}
        </LineChart>
      </GraphWrapper>
    </SectionWrapper>
  )
}

export default GraphSection
