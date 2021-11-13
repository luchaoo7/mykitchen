import React, {useEffect, useState} from 'react';

import { Link } from "react-router-dom";

const Item = (props) => {

    useEffect(() => {
        //alert("you are");
    }, []);

    // synonymous to ComponentDidMount if no dependency
    useEffect(() => {
        //localStorage.setItem(props.product.name, JSON.stringify(props.product));
        localStorage.setItem(props.product.name, JSON.stringify(props.product));
    },[]);

    const {name, price, image} = props.product;
    const public_image = process.env.PUBLIC_URL;

    const style = {
        width: "80px",
        height: "150px",
    }

    async function addToCart () {

        // check for items in cart
        let cart = JSON.parse(localStorage.getItem("cart"));

        // item to add to cart
        let item = {
            name: name,
            price: price,
            image: `${public_image}/images/${image}`
        };

        // check if cart is not empty
        cart.push(item);
        if(cart.length) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        props.setCart(cart);
    }

    async function getCart () {
        //localStorage.getItem()
    }


    return (

        <div className="col-sm-4">
                <div className="panel panel-primary">
                    <div className="panel-heading">{name}</div>
                    <div className="panel-body">
                    <Link to={`/details/${name}`}>
                        <img src={`${public_image}/images/${image}`} className="img-responsive" style={style}  alt=""/>
                    </Link>
                    </div>
                    <div className="panel-footer">Price: £{price}
                        <button onClick={addToCart} type="button" style={{float:'right'}} className="btn-primary glyphicon glyphicon-shopping-cart">
                            +
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default Item;