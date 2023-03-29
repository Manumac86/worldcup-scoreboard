import { Layout, Typography } from 'antd'
import Scoreboard from './components/Scoreboard/Scoreboard'
import './App.css'

const { Title } = Typography
const { Header, Content } = Layout

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  paddingInline: 20,
  lineHeight: '64px',
  background: '#65a9f3',
}
const contentStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
}

function App() {
  return (
    <Layout>
      <Header style={headerStyle}>
        <Title level={3}>Worldcup ScoreBoard</Title>
      </Header>
      <div className='App'>
        <Content style={contentStyle}>
          <Scoreboard />
        </Content>
      </div>
    </Layout>
  )
}

export default App
