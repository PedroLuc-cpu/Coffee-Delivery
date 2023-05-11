/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const InstroContainer = styled.main`
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
