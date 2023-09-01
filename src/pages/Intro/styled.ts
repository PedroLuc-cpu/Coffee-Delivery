/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const InstroContainer = styled.main`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-title']};
  }
  section {
    aside {
      max-width: 36.75rem;
    h1{
      line-height: 4rem;
      padding-bottom: 1rem;
    }
    p {
      font-size: 1.3rem;
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-subtitle']};
    }
    }
  }
`
export const ContainerItem = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
margin-top: 1.5rem;

p{
  display: flex;
  align-items: center;
  column-gap: .5rem;
  padding: .5rem;
  font-family: 'Roboto', sans-serif;
  
  svg{
    border-radius: 1rem;
    padding: .2rem;
    color: #ffff;
  }
}

`