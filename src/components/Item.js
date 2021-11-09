import React, {useEffect} from 'react';

import { Link } from "react-router-dom";

const Item = (props) => {

    useEffect(() => {
        //localStorage.setItem(props.product.name, JSON.stringify(props.product));
        localStorage.setItem(props.product.name, JSON.stringify(props.product));
    },[]);

    const style = {
        width: "80px",
        height: "150px",
    }

    function addToCart () {
        alert("Added to cart");
    }


    const {name, price, image} = props.product;
    const public_image = process.env.PUBLIC_URL;
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