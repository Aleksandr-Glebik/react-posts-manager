import React from 'react'
import { Space, Spin } from 'antd';

function Loader() {
  return (
    <Space direction="vertical" style={{ width: '100wv', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spin tip="Loading" size="large">
        <div className="content" style={{margin: '40px'}} />
      </Spin>
    </Space>
  )
}

export default Loader