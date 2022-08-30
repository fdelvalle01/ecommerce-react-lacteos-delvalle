import React, {createContext, useState}from 'react'

export const GlobalContext = createContext(); 

const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        //Copiamos carrito con el ... y ademas agregamos otro producto al carrito copiado.
        setCart([...cart, item]); 
    };

    const removeItem = () => setCart([]); //Vaciar data Carrito. 


    return (
      <GlobalContext.Provider value={{
        cart,
        addItem,
        removeItem
      }}>
        {/* el valor {children} es importante ya que sin este dara error porque nadie podra acceder al context. */}
     {children} 
      </GlobalContext.Provider>
  );
};

export default CartContext