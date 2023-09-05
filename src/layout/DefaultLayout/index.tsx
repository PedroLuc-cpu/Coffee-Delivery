import { Outlet } from 'react-router'
import { LayoutContainer } from './style'
import Intro from '../../pages/Intro'
import { CoffeeList } from '../../components/CoffeeList'
import Header from '../../components/Header/Header'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Intro />
      <CoffeeList />
    </LayoutContainer>
  )
}
