import logo from '../../assets/Logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { HeaderContainer } from './styled'

export default function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
      <img src={logo} alt="" />
      </Link>
      <nav>
        <NavLink to={'/CheckoutFilled'}>
          <MapPin size={32} weight="fill" color="#8047F8" />
          Porto Alegre, RS
        </NavLink>
        <Link to={'/CheckoutFilled'}>
          <ShoppingCartSimple size={32} weight="fill" color="#C47F17" />
        </Link>
      </nav>
    </HeaderContainer>
  )
}
