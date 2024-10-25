import React from 'react'
import './_products.scss'

const Products = () => {
    const productData = [
        {
            pName:'Jacket', 
            price: 45,
            img: "shop-1.jpg.png",
        },
        {
            pName:'Jacket', 
            price: 45,
            img: "shop-1.jpg.png",
        },
        {
            pName:'Jacket', 
            price: 45,
            img: "shop-1.jpg.png",
        },
        {
            pName:'Jacket', 
            price: 45,
            img: "shop-1.jpg.png",
        },
        {
            pName:'Jacket', 
            price: 45,
            img: "shop-1.jpg.png",
        }
    ]
  return (
    <div className='products-container'>
        {
            productData.map((product, index)=>{
                return (
                    <div className='mx-5 p-3 product-card' key={index}>
                        <div className='product-image-container'>
                            <img src={require(`../../assets/images/${product.img}`)}/>
                        </div>
                        <div className='product-info'>
                            <h5><a href='#'>{product.pName}</a></h5>
                            <p className='product-price'>{product.price}</p>
                            <div className='product-rating'>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                            </div>
                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Products