import React from 'react'
import styles from './CreatePost.module.scss'
import { fetchPosts } from '../../services/fetchPosts'

import { Typography, Button, Form, Input, Select } from 'antd'
import { setPosts } from '../../services/setPosts'

const { Title } = Typography
const { TextArea } = Input;
export interface ObjFormType {
  id: number | undefined
  name: string
  select: string
  text: string
  date?: string
}

const CreatePosts: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = (values: ObjFormType) => {
    const date = new Date().toLocaleDateString()
    values.date = date
    const newId = fetchPosts().then(data => {
      if (Array.isArray(data)) {
        return data.length + 1
      }
    })
    values.id = +newId
    console.log('Success:', values)
    setPosts(values)
    form.resetFields()
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  };

  const onReset = () => {
    form.resetFields()
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }

  return (
    <>
      <Title
        level={3}
        className={styles.title}
      >
        Создать новый пост
      </Title>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          width: 600,
          maxWidth: 1024,
         }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
      <Form.Item
        label="Название"
        name="name"
        rules={[{ required: true, message: 'Введите название!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Текст"
        name="text"
        rules={[{ required: true, message: 'Введите текст поста!' }]}
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="Тип"
        name="select"
        rules={[{ required: true, message: 'Выберите тип публикации!' }]}
      >
        <Select>
          <Select.Option value="news">Новость</Select.Option>
          <Select.Option value="note">Заметка</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          htmlType="submit"
          type="primary"
          className={styles.btn}
        >
          Создать
        </Button>
        <Button
          htmlType="button"
          onClick={onReset}
          className={styles.btn}
        >
          Сбросить
        </Button>
      </Form.Item>
    </Form>
    </>

  )
}

export default CreatePosts