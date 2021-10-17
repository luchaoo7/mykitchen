import React from 'react';

const ItemDetail = () => {

    const style = {
        width: "100%"
    }
    const {name, image, price, amount } = { 
        name:"Carlos",
        image:"Carlos.png", 
        price:10,
        amount:20
    };

    return (
        <>

        <div className="col-sm-5">
            <div className="panel panel-primary">
                <div className="panel-heading">{name}</div>
                <div className="panel-body">
                    <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={style} alt="Image"/>
                </div>
                <div className="panel-footer">Price: ${price} </div>
            </div>
        </div>

        <div className="col-sm-5">
            <div className="panel panel-primary">
                <div className="panel-heading">{name}</div>
                <div className="panel-body">
                    By KitchenContainer
                </div>
                <div className="panel-footer">Price: ${price} 
                    The Gert VGA 666 (6 bits per colour channel, hence 666) is a 
                    breakout/add-on board for the Raspberry Pi Model B+ 
                    (will not work with Model A/B as the additional GPIO pins on the 
                    Model B+ are required). It is an open source 
                    hardware design recently released publicly by 
                    Gert van Loo who was one of the hardware engineers 
                    that was instrumental in the initial design of the original Raspberry Pi 
                    (also one of the chip architects on the BCM2835 chip at the heart of the 
                    Raspberry Pi) and someone that many of you may have spoken to at Raspberry Jams 
                    or on the Raspberry Pi forums.
                </div>
            </div>
        </div>
        
         <div className="col-sm-2">
             <div className="btn-group-vertical">
                <button type="button" className="btn btn-lg">Add to cart</button>
                <button type="button" className="btn btn-primary btn-lg">Buy it now</button>
             </div>
        </div>


        </>
    )
}

export default ItemDetail;