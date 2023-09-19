import { useContext } from 'react'

import { CheckoutFilledContext } from '../../context/CardCofferContext'

import { CoffeeCard, Buy, Tag } from './styled'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

export interface Itags {
  tag1?: string
  tag2?: string
  tag3?: string
}
export interface ICofferLists {
  id: number
  Coffee: string
  Tags: Itags
  Name: string
  Description: string
  price: string
}

export function CardCoffer({
  id,
  Coffee,
  Tags,
  Name,
  Description,
  price,
}: ICofferLists) {

  const {ActionsCounter, handleClick} = useContext(CheckoutFilledContext)

  return (
    
    <CoffeeCard key={id}>
      <img
        src={Coffee}
        alt={Coffee}
        style={{ position: 'relative', top: '-25px' }}
      />
      <Tag>
        <span>{Tags.tag1}</span>
        <span>{Tags.tag2}</span>
        <span>{Tags.tag3}</span>
      </Tag>
      <strong>{Name}</strong>
      <p>{Description}</p>
      <Buy>
        <p>{price}</p>
        <div>
          <button>
            <Minus size={24} color="#8047F8" />
          </button>
          <strong>{ActionsCounter}</strong>
          <button onClick={handleClick}>
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
