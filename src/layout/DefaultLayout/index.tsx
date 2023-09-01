import { Outlet } from 'react-router'
import { LayoutContainer } from './style'
import Intro from '../../pages/Intro'
import { CoffeeList } from '../../components/CoffeeList'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
      <Intro />
      <CoffeeList/>
    </LayoutContainer>
  )
}
