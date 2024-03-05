import React, { useMemo, useState } from 'react'
import style from './style.module.css'
import { currency } from '../../static/Variables'
import { Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartProvider/CartProvider';

const CartItemMemo = React.memo(({ product, incrementProduct, decrementProduct, removeProduct }) => {
    console.log('CartItemMemo rendered!!!')

    const { product_id, product_image, product_name, product_price, product_quantity, product_size } = product
    const [quantity, setQuantity] = useState(product_quantity)


    const handleIncremntQuantity = () => {
        incrementProduct(product_id)
        setQuantity(prevQuantity => prevQuantity + 1)
    }
    const handleDecrementQuantity = () => {
        decrementProduct(product_id)
        if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1)
    }
    const handleRemoveProduct = () => {
        removeProduct(product_id)
    }
    return (
        <div className={style['cart-item']}>

            <div className={style['left']}>
                <Link to={`/product/${product_id}`}>
                    <img src={product_image} alt={product_name} className={style['image']} />
                </Link>
                <div className={style['info']}>
                    <div className={style['name']}>{product_name}</div>
                    <div className={style['price']}><s>{`${product_price}${currency}`}</s>{`${product_price * 0.3}${currency}`}</div>
                    <div className={style['size']}>{product_size}</div>
                </div>
            </div>

            <div className={style['right']}>
                <div className={style['counter']}>
                    <span className={style['minus']} onClick={handleDecrementQuantity}>-</span>
                    <span>{quantity}</span>
                    <span className={style['plus']} onClick={handleIncremntQuantity}>+</span>
                </div>

                <div className="total">{(product_price * quantity) * 0.3}{currency}</div>

                <Delete className={style['remove-btn']} onClick={handleRemoveProduct} />

            </div>

        </div>
    )
})

const CartItem = (product) => {
    console.log('CartItem rendered!!!')

    const { incrementProduct, decrementProduct, removeProduct } = useCartContext()

    const productMemo = useMemo(() => product, [])

    return <CartItemMemo 
    product={productMemo} 
    incrementProduct={incrementProduct} 
    decrementProduct={decrementProduct}
    removeProduct={removeProduct}
     />
}


export default CartItem