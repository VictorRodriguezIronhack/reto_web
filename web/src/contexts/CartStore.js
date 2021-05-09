import { createContext, useState, useCallback } from 'react';


const CartContext = createContext();

function CartStore({ children }) {

    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    
    const handleCartChange = useCallback((cart) => {
        if (cart) localStorage.setItem('cart', JSON.stringify(cart));
        else localStorage.removeItem('cart');
        setCart(cart);
    }, []);


    return (
        <CartContext.Provider value={{ cart, onCartChange: handleCartChange }} >
            {children}
        </CartContext.Provider>
    );
};

export { CartStore as default, CartContext };