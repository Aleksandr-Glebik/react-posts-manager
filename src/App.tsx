import React, { useState } from 'react'
import './scss/app.scss'
import FirstPage from './components/FirstPage/FirstPage';

import { Layout, Space } from 'antd'
const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  const [isVisited, setIsVisited] = useState(false)

  if (!isVisited) return <FirstPage setIsVisited={setIsVisited} />

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header className={'header'}>Header</Header>
        <Content className={'main'}>Content</Content>
        <Footer className={'footer'}>Footer</Footer>
      </Layout>
    </Space>
  )
}

export default App
