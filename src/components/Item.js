import React from 'react';

const Item = (props) => {

    const style = {
        width: "100%"
    }
    const {name, price } = props.product;
    return (
        <div className="col-sm-4">
        <a href="/details">
        <div className="panel panel-primary">
            <div className="panel-heading">{name}</div>
            <div className="panel-body">
                <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={style}  alt="dull"/>
            </div>
            <div className="panel-footer">Price: ${price}
            </div>
        </div>
        </a>
        </div>
    )
}

export default Item;