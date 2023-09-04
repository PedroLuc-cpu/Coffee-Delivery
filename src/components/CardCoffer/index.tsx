import { useState } from 'react'
import { CoffeeCard, Buy } from './styled'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

export interface ICofferLists {
  id: number
  Coffee: string
  Tags: string
  Name: string
  Description: string
  price: number
}

export function CardCoffer({
  id,
  Coffee,
  Tags,
  Name,
  Description,
  price,
}: ICofferLists) {
  const [ActionsCounter, SetActionsCounter] = useState(1)

  return (
    <CoffeeCard key={id}>
      <img src={Coffee} alt={Coffee} />
      <span>{Tags}</span>
      <strong>{Name}</strong>
      <p>{Description}</p>
      <Buy>
        <p>{price}</p>
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
  )
}
