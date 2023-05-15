
import React from 'react'
import styles from './FirstPage.module.scss'

import { Button } from 'antd';

interface FirstPagePropsType {
    setIsVisited: (value: boolean) => void
}

const FirstPage: React.FC<FirstPagePropsType> = ( { setIsVisited } ) => {
  const btnHandler = () => {
    setIsVisited(true)
    localStorage.setItem('isVisited', JSON.stringify(true))
  }

  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>Редактор статей и заметок</h1>
        <p className={styles.text}>Создавайте статьи и добавляйте их в избранное</p>
        <Button
          type="primary"
          onClick={btnHandler}
        >
          Приступить
        </Button>
    </div>
  )
}

export default FirstPage