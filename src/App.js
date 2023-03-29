import { Layout, Typography } from 'antd'
import Scoreboard from './components/Scoreboard/Scoreboard'

const { Title } = Typography
const { Header, Content } = Layout

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: 84,
  background: '#65a9f3',
}
const contentStyle = {
  textAlign: 'center',
  minHeight: '100vh',
  lineHeight: '120px',
  color: '#fff',
}

function App() {
  return (
    <Layout>
      <Header style={headerStyle}>
        <Title level={1}>Worldcup ScoreBoard</Title>
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
