import { ComponentType, Suspense, lazy } from 'react'

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
