import styled from 'styled-components'


export const ContainerCoffeeList = styled.section`
display: grid;
grid-template-columns: repeat(4,256px);
gap: 40px 1rem;
justify-content: center;
margin-bottom: 10rem;

`


export const CoffeeCard = styled.div`
max-width: 256px;
padding: .5rem;
background-color: #F3F2F2;
display: flex;
flex-direction: column;
align-items: center;
border-top-right-radius: 3rem;

p{
 text-align: center;
}

span{
 background-color: #F1E9C9;
 color:  #C47F17;
 padding: .2rem .5rem .2rem .5rem;
 border-radius: 1rem;
 font-size: 12px;
 font-weight: bold;
}

`

export const Buy = styled.footer`
padding-top:1rem;
display: flex;
gap: 1rem;
align-items: center;

p{
 font-size: 1.2rem;
 font-weight: bold;
}

strong{
 font-weight: lighter;
 font-size: 1.2rem;
 padding: .1rem;
}

div{
 background-color: #E6E5E5;
 padding: .2rem;
 display: flex;
 align-items: center;
 gap: .5rem;
 
}

 button{
 border: none;
 cursor: pointer;
 background-color: transparent;
}

`