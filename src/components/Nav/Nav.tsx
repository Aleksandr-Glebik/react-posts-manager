
import React from 'react'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: <Link to="/">Посты</Link>,
        },
        {
          title: <Link to="/create">Создать</Link>,
        },
        {
          title: <Link to="/favorite">Избранное</Link>,
        }
    ]}
  />
  )
}

export default Nav