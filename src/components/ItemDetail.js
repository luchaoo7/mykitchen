import { JS } from '@aws-amplify/core';
import React, {useEffect, useState} from 'react';
//import XLSX from 'xlsx';
//var FileSaver = require('file-saver');
import { useParams } from "react-router-dom";

const ItemDetail = (props) => {

    const [product, setProduct] = useState({});

    const style = {
        width: "400px",
        height: "550px",
    }

    const public_image = process.env.PUBLIC_URL;

    let { slug } = useParams();
    console.log(slug)


    useEffect(() => {
        console.log("Hello World")
        let item = JSON.parse(localStorage.getItem(slug))
        setProduct(item);
        console.log(slug)
    },[setProduct]);
    

    return (
        <>
        <div className="container">    
            <div className="row">    
                <div className="col-sm-7">
                    <img src={`${public_image}/images/${product.image}`} className="img-responsive" style={style}  alt=""/>
                </div>
        
                <div class="col-md-3">
                    <h3 class="my-3">Mobile Description</h3>
                    <p>
                         {
                             product.description
                         }
                    </p>
                    <h3 class="my-3">Project Details</h3>
                    <ul>
                        <li>Lorem Ipsum</li>
                        <li>Dolor Sit Amet</li>
                        <li>Consectetur</li>
                        <li>Adipiscing Elit</li>
                    </ul>
                </div>
        
                <div className="col-sm-2 pull-right">
                    <div className="btn-group-vertical">
                        <form>
                            <select className="form-control" style={{marginBottom: 15}}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </form>
                        <button style={{marginBottom: 15}} type="button" className="btn btn-lg">Add to cart</button>
                        <button type="button" className="btn btn-primary btn-lg"> Buy it now</button>
                    </div>
                </div>


            </div>
        </div>
        <div className="container">    
            <div className="row">    
            </div>
        </div>
 
        </>
    )
}

export default ItemDetail;