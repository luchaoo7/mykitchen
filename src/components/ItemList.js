import React from 'react';
import Item from './Item';

const ItemList = (props) => {

    return (
        <div className="container">    
            <div className="row">    
            {
                props.products.map((product) => {
                    return <Item key={product.id} product={product} setCart={props.setCart}/>
                })
            }
            </div>
        </div>
    )
}

export default ItemList;