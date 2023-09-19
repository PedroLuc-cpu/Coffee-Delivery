import { Outlet } from 'react-router'
import { LayoutContainer } from './style'
import Header from '../../components/Header/Header'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
