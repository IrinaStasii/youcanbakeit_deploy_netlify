import React, { useState, createContext, ReactNode, useContext } from "react";
import { ShoppingCart } from "./ShoppingCart";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: CartItem[]
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number, name: string, image: string) => void;
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

type CartItem = {
    id: number
    quantity: number
    name: string
    image: string

}

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCartContext = createContext({} as
    ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({ children }:
    ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([])


    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0)


    console.log("BEFORE OPEN CART");
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number, name: string, image: string) {
        console.log('Before update:', cartItems);
        setCartItems(currItems => {
            console.log('Inside update:', currItems);
            const existingItem = currItems.find((item) => item.id === id);

            if (existingItem) {
                console.log("existing item, cart items = ", currItems)
                const currItems2 = currItems.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
                console.log("existing item, cart items2 = ", currItems2)

                return currItems2;
            } else {
                console.log("non existing item, cart items = ", currItems);
                const currItems3 =  [...currItems, { id, name, image, quantity: 1 }];
                console.log("non existing item, cart items3 = ", currItems3);
                return currItems3;
            }
        });
    }



    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }



    return (<ShoppingCartContext.Provider value={{ openCart, closeCart, cartQuantity, cartItems, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
        {children}
        <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
    )
}
