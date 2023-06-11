import { ComponentType, Suspense, lazy } from 'react'
import { createHashRouter, Outlet } from 'react-router-dom'

const lazyLoad = (
  compLoader: () => Promise<{ default: ComponentType<unknown> }>
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
      {
        path: '/',
        children: [
          {
            index: true,
            element: lazyLoad(() => import('./pages/home.tsx')),
          },
        ],
      },
      // 登陆
      {
        path: '/login',
        element: lazyLoad(() => import('./pages/login.tsx')),
      },
    ],
    element: <Outlet />,
  },
])
