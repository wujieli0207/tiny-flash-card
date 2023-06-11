import { ComponentType, Suspense, lazy } from 'react'
import { createHashRouter, Outlet } from 'react-router-dom'

const lazyLoad = (
  compLoader: () => Promise<{ default: ComponentType<any> }>
) => {
  const Comp = lazy(compLoader)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comp />
    </Suspense>
  )
}

export const routes = createHashRouter([
  {
    path: '/',
    children: [
      // 登陆
      {
        path: '/login',
        element: lazyLoad(() => import('./login')),
      },
    ],
    element: <Outlet />,
  },
])
