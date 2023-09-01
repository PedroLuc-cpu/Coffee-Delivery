import { useState } from 'react'
import { Buy, CoffeeCard, ContainerCoffeeList } from './styled'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

interface ICofferLists {
  id: number
  Coffee: string
  Tags: string
  Name: string
  Description: string
  Buy: number
}

const coffer1: ICofferLists[] = [
  {
    id: 1,
    Coffee: 'imagemm',
    Tags: 'Tradicional',
    Name: 'Expresso Tradicional',
    Description: 'O tradicional café feito com água quente e grãos moídos',
    Buy: 9.9,
  },

  {
    id: 2,
    Coffee: 'imagemm1',
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    Buy: 9.9,
  },
  {
    id: 3,
    Coffee: 'imagemm1',
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    Buy: 9.9,
  },

  {
    id: 4,
    Coffee: 'imagemm1',
    Tags: 'Tradicional',
    Name: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
    Buy: 9.9,
  },
]

export function CoffeeList() {
  const [ActionsCounter, SetActionsCounter] = useState(1)

  return (
    <div>
      <h2>Nossos cafés</h2>
      <ContainerCoffeeList>
        {coffer1.map((item) => (
          <CoffeeCard key={item.id}>
            <img src={item.Coffee} alt={item.Coffee} />
            <span>{item.Tags}</span>
            <strong>{item.Name}</strong>
            <p>{item.Description}</p>
            <Buy>
              <p>{item.Buy}</p>
              <div>
                <button>
                  <Minus size={24} color="#8047F8" />
                </button>
                <strong>{ActionsCounter}</strong>
                <button onClick={() => SetActionsCounter(ActionsCounter + 1)}>
                  <Plus size={24} color="#8047F8" />
                </button>
              </div>
              <button
                style={{
                  backgroundColor: '#4B2995',
                  borderRadius: '5px',
                  color: 'white',
                  padding: '.2rem',
                }}
              >
                <ShoppingCart size={24} />
              </button>
            </Buy>
          </CoffeeCard>
        ))}
      </ContainerCoffeeList>
    </div>
  )
}
