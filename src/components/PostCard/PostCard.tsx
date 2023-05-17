

import React from 'react'
import styles from './PostCard.module.scss'
import clsx from 'clsx'

import { Card, Space } from 'antd';
import { ObjFormType } from '../../Page/CreatePost/CreatePost';

const PostCard: React.FC<ObjFormType> = ( { name, text, select, date } ) => {
  return (
    <Space direction="vertical" size={16}>
        <Card
          title={name}
          className={styles.title}
        >
            <div className={styles.container}>
                <p className={styles.text}>
                {text}
                </p>
                <div className={styles.container__info}>
                    <p className={styles.date}>
                        {date}
                    </p>
                    <p className={clsx(styles.select, select === 'news' ? styles.news : styles.note )}>
                        {select}
                    </p>
                </div>
            </div>
        </Card>
    </Space>
  )
}

export default PostCard