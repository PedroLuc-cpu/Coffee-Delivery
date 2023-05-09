import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  nav {
    display: flex;
    gap: 0.8rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${(props) => props.theme['purple-light']};
    }
  }
`
