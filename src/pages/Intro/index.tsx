import imagem from '../../assets/Imagem.svg'
import { InstroContainer } from './styled'

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
        <div>
          <p>Compra simples e segura</p>
          <p>Entrega rápida e rastreada</p>
          <p>Embalagem mantém o café intacto</p>
          <p>O café chega fresquinho até você</p>
        </div>
      </section>
      <img src={imagem} alt="" />
    </InstroContainer>
  )
}
