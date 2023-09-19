import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  column-gap: 2rem;
  justify-content: center;
`
export const Address = styled.form`
  background-color: black;
  height: 372px;
  background-color: #f3f2f2;
`
export const Payment = styled.form`
  background-color: blue;
  background-color: #f3f2f2;
  div {
    padding: 0;
    margin: 0;
    padding: 2rem;
    display: flex;
    justify-content: center;
    p {
      padding: inherit;
    }
  }
`
export const ButtonPayment = styled.button`
  background-color: #e6e5e5;
  border: transparent;
  margin: 1rem;
  padding: 1rem;
  font-size: 0.9rem;
  color: #574f4d;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  :hover {
    background-color: #d7d5d5;
  }
  :focus {
    background-color: #574f4d;
  }
`

export const Checkout = styled.div`
  width: 640px;
  height: 591px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CoffeeCard = styled.div`
  background-color: #f3f2f2;
  width: 448px;
  height: 498px;
  border-radius: 5px;
`
