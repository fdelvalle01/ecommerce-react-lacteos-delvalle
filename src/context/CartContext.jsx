import React, {createContext, useState}from 'react'

export const GlobalContext = createContext(); 
/*
    Componente cartContext contiene las funciones basicas y globales que se puede utilizar a lo largo de todo el proyecto con solo una llamada a este.   
    @children Parametro que contiene todos los hijos de los componentes padres en el sistema 
*/
const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, counter) => {
        //Copiamos carrito con el ... y ademas agregamos otro producto al carrito copiado.

        if(isInCart(cart, item.id, counter)){
          let items = cart;
          let itemIndex = items.findIndex((element) => element.id === item.id);
          cart[itemIndex].counter += counter;
          setCart([...cart]); 
        } else{
          setCart([...cart, {...item, counter}]); 
        }
    };

    const isInCart = (cart, item) => {
      let value = cart.find( element => element.id === item);
      return value;
    }

    const removeItem = (item) => {
      const newCart = cart.filter((items) => items.id !== item.id);
      setCart(newCart);
    }

    const clearCart = () => {
      setCart([]); //Vaciar data Carrito. 
    }
    
    return (
      <GlobalContext.Provider value={{
        cart,
        addItem,
        removeItem,
        clearCart, 
        isInCart
        
      }}>
        {/* el valor {children} es importante ya que sin este dara error porque nadie podra acceder al context. */}
     {children} 
      </GlobalContext.Provider>
  );
};

export default CartContext