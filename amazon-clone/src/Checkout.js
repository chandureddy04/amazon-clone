import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349668_.jpg'
                    alt='' />
                <div className='checkout__title'>
                    <h2>{user?.email.substring(0, user?.email.lastIndexOf("@"))} Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating} />
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
