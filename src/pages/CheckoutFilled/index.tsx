import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import {
  Address,
  ButtonPayment,
  Checkout,
  CoffeeCard,
  LayoutContainer,
  Payment,
} from './styled'

import {useContext} from "react"
import { CheckoutFilledContext } from '../../context/CardCofferContext'


export function CheckoutFilled() {
  const {ActionsCounter} = useContext(CheckoutFilledContext)

  return (
    <div>
    <LayoutContainer>
        <Checkout>
          <Address>
            <p>{ActionsCounter}</p>
            <input type="number" name="" id="" />
            <input type="text" name="" id="" />
            <input type="number" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
          </Address>
          <Payment>
            <div>
              <ButtonPayment>
                <CreditCard color="#8047F8" size={24} /> Cartão de Crédito
              </ButtonPayment>
              <ButtonPayment>
                <Bank color="#8047F8" size={24} /> Cartão de Débito
              </ButtonPayment>
              <ButtonPayment>
                <Money color="#8047F8" size={24} />
                Dinheiro
              </ButtonPayment>
            </div>
          </Payment>
        </Checkout>
        <CoffeeCard>
        </CoffeeCard>
      </LayoutContainer>
    </div>
  )
}
