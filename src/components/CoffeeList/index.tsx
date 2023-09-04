import { ContainerCoffeeList } from './styled'
import { CardCoffer, ICofferLists } from '../CardCoffer'
import c1 from '../../assets/coffer/Americano.svg'
import c2 from '../../assets/coffer/Image.svg'
import c3 from '../../assets/coffer/Café com Leite.svg'
import c4 from '../../assets/coffer/Capuccino.svg'
import c5 from '../../assets/coffer/Chocolate Quente.svg'
import c6 from '../../assets/coffer/Cubano.svg'
import c7 from '../../assets/coffer/Expresso Cremoso.svg'
import c8 from '../../assets/coffer/Expresso.svg'
import c9 from '../../assets/coffer/Havaiano.svg'
import c10 from '../../assets/coffer/Irlandês.svg'
import c11 from '../../assets/coffer/Latte.svg'
import c12 from '../../assets/coffer/Macchiato.svg'
import c13 from '../../assets/coffer/Mochaccino.svg'
import c14 from '../../assets/coffer/Árabe.svg'

const coffer1: ICofferLists[] = [
  {
    id: 1,
    Coffee: c1,
    Tags: 'Tradicional',
    Name: 'Expresso Tradicional',
    Description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },

  {
    id: 2,
    Coffee: c2,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    Coffee: c3,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },

  {
    id: 4,
    Coffee: c4,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },

    {
    id: 5,
    Coffee: c5,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
    {
    id: 6,
    Coffee: c6,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
    {
    id: 7,
    Coffee: c7,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
    {
    id: 8,
    Coffee: c8,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
    {
    id: 9,
    Coffee: c9,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
    {
    id: 10,
    Coffee: c10,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
    {
    id: 11,
    Coffee: c11,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
    {
    id: 12,
    Coffee: c12,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
    {
    id: 13,
    Coffee: c13,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
    {
    id: 14,
    Coffee: c14,
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
]

export function CoffeeList() {
  return (
    <div>
      <h2>Nossos cafés</h2>
      <ContainerCoffeeList>
        {coffer1.map((item) => (
          <CardCoffer
            key={item.id}
            id={item.id}
            Coffee={item.Coffee}
            Tags={item.Tags}
            Name={item.Name}
            Description={item.Description}
            price={item.price}
          />
        ))}
      </ContainerCoffeeList>
    </div>
  )
}
