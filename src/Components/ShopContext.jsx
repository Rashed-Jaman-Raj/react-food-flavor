import { createContext, useState } from "react";

const ShopContext = createContext()

import { productsData } from "../data"


const ShopContextProvider = ({children}) => {
    const [products, setProducts ] = useState(productsData)

    return (
      <ShopContext.Provider value={{products}}>
        {children}
      </ShopContext.Provider>
    )
}

export default ShopContextProvider
export { ShopContext };