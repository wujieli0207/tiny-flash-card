import { PageTitle } from '@/client/components/PageTitle'
import { Input } from 'antd'

const Login = () => {
  return (
    <>
      <PageTitle title="登陆" />

      <div>
        <Input placeholder="请输入用户名" />
      </div>
    </>
  )
}

export default Login
