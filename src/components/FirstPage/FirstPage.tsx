
import React from 'react'
import styles from './FirstPage.module.scss'

import { Button } from 'antd';

interface FirstPagePropsType {
    setIsVisited: (value: boolean) => void
}

const FirstPage: React.FC<FirstPagePropsType> = ( { setIsVisited } ) => {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>Welcome to post manager</h1>
        <Button
          type="primary"
          onClick={() => setIsVisited(true)}
        >
          Primary Button
        </Button>
    </div>
  )
}

export default FirstPage