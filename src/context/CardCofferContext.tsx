import {ReactNode, createContext, useState} from 'react'


interface ICofferCardProviderProps {
    children: ReactNode
  }

type ICofferCardContextProps = {
    ActionsCounter: number
    handleClick():void 
}

export const  CheckoutFilledContext = createContext({} as ICofferCardContextProps);

export const CardCofferProvider = ({children}:ICofferCardProviderProps) =>{
    // const [cardCoffer, setCardCoffer] = useState<ICofferCard[]>([]);

    const [ActionsCounter, SetActionsCounter] = useState(0)

    const handleClick = () => {
        SetActionsCounter((prev) => prev + 1)
      }

    return(
        <CheckoutFilledContext.Provider value={{ActionsCounter,handleClick}}>
            {children}
        </CheckoutFilledContext.Provider>
    )
}