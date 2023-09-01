import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import imagem from '../../assets/Imagem.svg'
import { ContainerItem, InstroContainer } from './styled'

export default function Intro() {
  return (
    <InstroContainer>
      <section>
        <aside>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </aside>
        <ContainerItem>
          <p>
          <ShoppingCart
          style={{backgroundColor:"#C47F17"}}
          size={32}
          />
          Compra simples e segura</p>

          <p>
          <Package
          style={{backgroundColor:"#403937"}}
          size={32}
          />
          Embalagem mantém o café intacto</p>

          <p>
          <Timer
          style={{backgroundColor:"#DBAC2C"}} 
          size={32}
          />
          Entrega rápida e rastreada</p>
          
          <p>
          <Coffee
          style={{backgroundColor:"#8047F8"}} 
          size={32}
          />
          O café chega fresquinho até você</p>

        </ContainerItem>
      </section>
      <img src={imagem} alt="" />
    </InstroContainer>
  )
}
