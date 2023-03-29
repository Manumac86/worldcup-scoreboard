import React from 'react'
import { SummaryContainer, SummaryTable, Title } from './styles'
import { Button } from '../styles'

const columns = [
  {
    title: 'Home Team',
    dataIndex: 'homeTeam',
    key: 'homeTeamName',
    align: 'center',
    render: (record) => <div key={record.name}>{record.name}</div>,
  },
  {
    title: '',
    dataIndex: 'homeTeam',
    key: 'homeTeamScore',
    width: 40,
    align: 'center',
    render: (record) => <div key={record.score}>{record.score}</div>,
  },
  {
    title: '',
    dataIndex: 'awayTeam',
    key: 'awayTeamScore',
    width: 40,
    align: 'center',
    render: (record) => <div key={record.score}>{record.score}</div>,
  },
  {
    title: 'Away Team',
    dataIndex: 'awayTeam',
    key: 'awayTeamName',
    align: 'center',
    render: (record) => <div key={record.name}>{record.name}</div>,
  },
]

function Summary({ summary, startNewChampionship }) {
  return (
    <SummaryContainer>
      <Title level={2}>Summary</Title>
      <SummaryTable
        bordered
        rowKey={(record) => record.createdAt}
        columns={columns}
        dataSource={summary}
        size='small'
        pagination={false}
      />
      <Button type='primary' onClick={startNewChampionship}>
        New Championship
      </Button>
    </SummaryContainer>
  )
}

export default Summary
