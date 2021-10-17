import React from "react";
//import MyCarousel from '../components/Carousel';
import NavBar from './NavBar'
import MyJumbotron from './Jumbotron';
import MyFooter from './Footer';
import ItemList from './ItemList';
import products from '../data.json'


const KitchenContainer = (props) => {

    return (
        <>
        <MyJumbotron />
        <NavBar/>
        <ItemList products={products}/>
        <MyFooter />
        </>
    )
}

export default KitchenContainer;