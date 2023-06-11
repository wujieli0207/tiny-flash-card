import { useState } from 'react'
import { Input, Button } from 'antd'
import { PageTitle } from '@/client/components/PageTitle'

const Login = () => {
  // 用户名
  const [username, setUsername] = useState('')
  // 密码
  const [password, setPassword] = useState('')

  const onSubmit = () => {}

  return (
    <>
      <PageTitle title="登陆" />

      <div>
        <Input
          value={username}
          placeholder="请输入用户名"
          size="large"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input.Password
          value={password}
          placeholder="请输入密码"
          size="large"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="primary" size="large">
          {' '}
          登 陆
        </Button>
      </div>
    </>
  )
}

export default Login
