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
    Tags: {
      tag1: 'Tradicional',
    },
    Name: 'Expresso Tradicional',
    Description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9.90',
  },

  {
    id: 2,
    Coffee: c2,
    Tags: {
      tag1: 'Tradicional',
    },
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9.90',
  },
  {
    id: 3,
    Coffee: c3,
    Tags: {
      tag1: 'Tradicional',
    },
    Name: 'Expresso Cremoso',
    Description: 'Café expresso tradicional com espuma cremosa',
    price: '9.90',
  },

  {
    id: 4,
    Coffee: c4,
    Tags: {
      tag1: 'Tradicional',
      tag2: 'gelado',
    },
    Name: 'Expresso Gelado',
    Description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9.90',
  },

  {
    id: 5,
    Coffee: c5,
    Tags: {
      tag1: 'Tradicional',
      tag2: 'com leite',
    },
    Name: 'Café com Leite',
    Description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9.90',
  },
  {
    id: 6,
    Coffee: c6,
    Tags: {
      tag1: 'Tradicional',
      tag2: 'com leite',
    },
    Name: 'Latte',
    Description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9.90',
  },
  {
    id: 7,
    Coffee: c7,
    Tags: {
      tag1: 'Tradicional',
      tag2: 'com leite',
    },
    Name: 'Capuccino',
    Description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9.90',
  },
  {
    id: 8,
    Coffee: c8,
    Tags: {
      tag1: 'Tradicional',
      tag2: 'com leite',
    },
    Name: 'Macchiato',
    Description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9.90',
  },
  {
    id: 9,
    Coffee: c9,
    Tags: {
      tag1: 'Tradicional',
      tag2: 'com leite',
    },
    Name: 'Mocaccino',
    Description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9.90',
  },
  {
    id: 10,
    Coffee: c10,
    Tags: {
      tag1: 'especial',
      tag2: 'com leite',
    },
    Name: 'Chocolate Quente',
    Description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9.90',
  },
  {
    id: 11,
    Coffee: c11,
    Tags: {
      tag1: 'especial',
      tag2: 'alcoólico',
      tag3: 'gelado',
    },
    Name: 'Cubano',
    Description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9.90',
  },
  {
    id: 12,
    Coffee: c12,
    Tags: {
      tag1: 'especial',
    },
    Name: 'Havaiano',
    Description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9.90',
  },
  {
    id: 13,
    Coffee: c13,
    Tags: {
      tag1: 'especial',
    },
    Name: 'Árabe',
    Description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9.90',
  },
  {
    id: 14,
    Coffee: c14,
    Tags: {
      tag1: 'Tradicional',
      tag2: 'alcoólico',
    },
    Name: 'Irlandês',
    Description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9.90',
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
