import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
                <div className='home__row'>
                    <Product
                        id='123'
                        title={'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October'}
                        price={29.99}
                        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                        rating={5} />
                    <Product
                        id='124'
                        title='HP Pavilion Gaming 10th Gen Intel Core i5 Processor 15.6-inch(39.6 cm) FHD Gaming Laptop (8GB/512GB SSD + 32GB Intel Optane/144 Hz/Win10/MS Office/NVIDIA GTX 1650 4GB/Shadow Black), 15-dk1148TX'
                        price={500}
                        image={'https://m.media-amazon.com/images/I/611VHOvjkES._SX569_.jpg'}
                        rating={4} />
                </div>
                <div className='home__row'>
                    <Product
                        id='125'
                        title='American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)'
                        price={100}
                        image='https://m.media-amazon.com/images/I/71+xfz79pWL._SY450_.jpg'
                        rating={3} />
                    <Product
                        id='126'
                        title='HP Pavilion Gaming 10th Gen Intel Core i5 Processor 15.6-inch(39.6 cm) FHD Gaming Laptop (8GB/512GB SSD + 32GB Intel Optane/144 Hz/Win10/MS Office/NVIDIA GTX 1650 4GB/Shadow Black), 15-dk1148TX'
                        price={500}
                        image={'https://m.media-amazon.com/images/I/611VHOvjkES._SX569_.jpg'}
                        rating={4} />
                    <Product
                        id='127'
                        title={'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October'}
                        price={29.99}
                        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                        rating={5} />
                </div>
                <div className='home__row'>
                    <Product
                        id='128'
                        title='IFB 8kg 5 Star Fully-Automatic Front Loading Washing Machine (Senator WXS, Silver, 3D Wash Technology,Aqua Energie,Anti- Allergen,In-built heater)'
                        price={523}
                        image='https://m.media-amazon.com/images/I/710CPzd-ojS._SY679_.jpg'
                        rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
