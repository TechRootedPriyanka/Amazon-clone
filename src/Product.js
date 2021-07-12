import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from "./StateProvider";

function Product({id, title, price, rating, image}) {
        const[{ basket }, dispatch] = useStateValue();

        // console.log("this is the basket >>> ", basket)
        const addToBasket = () => {
            dispatch({
                type: 'ADD_TO_BASKET',
                item:{
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            });

        }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>

                <p className="product__price">
                <small>$</small>
                <strong>{price}</strong></p>
                <div className="product__rating">
                    {Array(rating) .fill() .map((_, i) => (<StarIcon/>))}
                    {/* <StarIcon/> <StarBorderIcon/> */}
                </div>
            </div>
            <img src={image} alt="product1" />

            <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}

export default Product
