import React, { useEffect, useState } from 'react'
import './scss/app.scss'
import FirstPage from './components/FirstPage/FirstPage';
import Nav from './components/Nav/Nav';
import Loader from './components/Loader/Loader';
import { Outlet } from "react-router-dom";

import { Layout, Space } from 'antd'
const { Header, Footer, Content } = Layout;


const App: React.FC = () => {
  const [isVisited, setIsVisited] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect( () => {
    if (localStorage.getItem('isVisited')) {
      setIsVisited(true)
    }
    setIsLoaded(true)
  }, [])

  if (!isLoaded) return <Loader />

  if (!isVisited) return <FirstPage setIsVisited={setIsVisited} />

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header className={'header'}>
          <Nav />
        </Header>
        <Content className={'main'}>
          <Outlet />
        </Content>
        <Footer className={'footer'}>Aleksandr Glebik 2023</Footer>
      </Layout>
    </Space>
  )
}

export default App
