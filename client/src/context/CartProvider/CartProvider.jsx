import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getProductIndex } from './utilsMethods'

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [list, setList] = useState(
        JSON.parse(localStorage.getItem('list')) || []
    )

    const [delivery, setDelivery] = useState(JSON.parse(localStorage.getItem('delivery')) || 0)

    const addProduct = useCallback((product) => {
        setList(prevList => {
            const index = getProductIndex(product.product_id, prevList)

            if (index == -1) {
                return [...prevList, product]
            }
            return prevList
        })
    }, [])
    const clearCart = useCallback(() => {
        setList([])
    }, [])

    const removeProduct = useCallback((product_id) => {
        setList(prevList => {
            const index = getProductIndex(product_id, prevList)

            if (index != -1) {
                const new_list = [...prevList]
                new_list.splice(index, 1)
                return new_list
            }
            return prevList
        })
    }, [])



    const incrementProduct = useCallback((product_id) => {
        setList(prevList => {
            const index = getProductIndex(product_id, prevList)

            if (index != -1) {
                const new_list = [...prevList]
                new_list[index] = { ...new_list[index], product_quantity: new_list[index]['product_quantity'] + 1 }
                return new_list
            }
            return prevList
        })
    }, [])

    const decrementProduct = useCallback((product_id) => {
        setList(prevList => {
            const index = getProductIndex(product_id, prevList)

            if (index != -1 && prevList[index].product_quantity > 1) {
                const new_list = [...prevList]
                new_list[index] = { ...new_list[index], product_quantity: new_list[index]['product_quantity'] - 1 }
                return new_list
            }
            return prevList
        })
    }, [])

    const deliveryMethod = useCallback((delivery) => {
        setDelivery(delivery)
    }, [])




    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    useEffect(() => {
        localStorage.setItem('delivery', JSON.stringify(delivery))
    }, [delivery])


    return (
        <CartContext.Provider
            value={{
                list,
                delivery,
                addProduct,
                incrementProduct,
                decrementProduct, 
                removeProduct,
                deliveryMethod,
                clearCart
            }}
        >
            {children}

        </CartContext.Provider>
    )
}

export default CartProvider