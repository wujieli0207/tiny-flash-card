import { PageTitle } from '@/client/components/PageTitle'
import { Input, Button } from 'antd'

const Login = () => {
  return (
    <>
      <PageTitle title="登陆" />

      <div>
        <Input placeholder="请输入用户名" size="large" />
        <Input.Password placeholder="请输入密码" size="large" />
        <Button type="primary"> 登 陆</Button>
      </div>
    </>
  )
}

export default Login
