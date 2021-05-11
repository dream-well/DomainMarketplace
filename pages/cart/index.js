import React, { useEffect } from 'react'

import CartList from 'containers/cart/CartList'
import styles from './index.module.scss'
import Due from '../../containers/cart/Due'
import { cartActions } from '_actions'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
  const dispatch = useDispatch()
  const cart_list = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch( cartActions.get() )
  }, [])
  
  return (
    <div className="px-4 pt-8">
      <div className={styles.title}>
        Your Cart
      </div>
      <div className={styles.count}>
        2 items
      </div>
      <div className="flex flex-col md:flex-row">
        <CartList cart_list={cart_list}/> 
        <Due total={200}/>
      </div>
    </div>
  );
}

export default Cart;
