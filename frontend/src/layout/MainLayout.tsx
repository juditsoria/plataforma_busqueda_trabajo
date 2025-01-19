import { Outlet } from 'react-router-dom'
import { Header } from '../components/_shared/Header'

export function MainLayout () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
