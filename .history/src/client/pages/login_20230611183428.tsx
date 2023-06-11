import { useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Input, Button } from 'antd'
import type { InputRef } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import { PageTitle } from '@/client/components/PageTitle'
import { messageError } from '@/client/utils/message'

const Login = () => {
  // 用户名
  const [username, setUsername] = useState('')
  // 密码
  const [password, setPassword] = useState('')
  // 用户名输入框
  const usernameRef = useRef<InputRef>(null)
  // 密码输入框
  const passwordRef = useRef<InputRef>(null)

  const onSubmit = () => {
    if (!username) {
      messageError('请输入用户名')
      usernameRef.current?.focus()
      return
    }

    if (!password) {
      messageError('请输入密码')
      passwordRef.current?.focus()
      return
    }

    // 暂时模拟登陆
    ;<Navigete to="/" replace />
  }

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col justify-center items-center dark:text-gray-100">
      <PageTitle title="登陆" />

      <header className="w-screen text-center min-h-[236px]">
        <div className="text-5xl font-bold text-mainColor">flash card</div>
        <div className="mt-4 text-xl text-mainColor">
          科学的方式加强你的记忆
        </div>
      </header>

      <div className="w-[70%]">
        <Input
          value={username}
          ref={usernameRef}
          placeholder="请输入用户名"
          size="large"
          prefix={<UserOutlined />}
          className="mb-2"
          onChange={(e) => setUsername(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              passwordRef.current?.focus()
            }
          }}
        />
        <Input.Password
          value={password}
          ref={passwordRef}
          placeholder="请输入密码"
          size="large"
          prefix={<KeyOutlined />}
          className="mb-2"
          onChange={(e) => setPassword(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              onSubmit()
            }
          }}
        />
        <Button type="primary" size="large" block onClick={onSubmit}>
          登 陆
        </Button>
      </div>
    </div>
  )
}

export default Login
