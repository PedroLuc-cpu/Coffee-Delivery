import { Outlet } from 'react-router'
import { LayoutContainer } from './style'
import Intro from '../../pages/Intro'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
      <Intro />
    </LayoutContainer>
  )
}
