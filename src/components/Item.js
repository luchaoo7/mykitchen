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


    const {name, price, image} = props.product;
    const public_image = process.env.PUBLIC_URL;
    return (

        <div className="col-sm-4">
            <Link to={`/details/${name}`}>
                <div className="panel panel-primary">
                    <div className="panel-heading">{name}</div>
                    <div className="panel-body">
                        <img src={`${public_image}/images/${image}`} className="img-responsive" style={style}  alt=""/>
                    </div>
                    <div className="panel-footer">Price: £{price}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;