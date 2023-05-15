import React, { useEffect, useState } from 'react'
import './scss/app.scss'
import FirstPage from './components/FirstPage/FirstPage';

import { Layout, Space } from 'antd'
const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  const [isVisited, setIsVisited] = useState(false)

  useEffect( () => {
    if (localStorage.getItem('isVisited')) {
      setIsVisited(true)
    }
  }, [])

  if (!isVisited) return <FirstPage setIsVisited={setIsVisited} />

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header className={'header'}>Header</Header>
        <Content className={'main'}>Content</Content>
        <Footer className={'footer'}>Aleksandr Glebik 2023</Footer>
      </Layout>
    </Space>
  )
}

export default App
