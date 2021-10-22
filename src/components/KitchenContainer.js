import React, { useState, useEffect } from "react";
//import MyCarousel from '../components/Carousel';
import NavBar from './NavBar'
import MyJumbotron from './Jumbotron';
import MyFooter from './Footer';
import ItemList from './ItemList';
import products from '../data.json'
import ItemDetail from "./ItemDetail";
import Cart from "./Cart";
import { Route, Switch} from 'react-router-dom';
import Success from "./Success";
import Fail from "./Fail";


const KitchenContainer = (props) => {

    const [name, setName ] = useState("Messi");

    return (
        <>
        <Switch>
            <Route exact path="/">
                <MyJumbotron />
                <NavBar/>
                <ItemList products={products}/>
                <MyFooter />
            </Route>
            <Route exact path="/details">
                <MyJumbotron />
                <NavBar/>
                <ItemDetail />
                <MyFooter />
            </Route>
            <Route exact path="/cart">
                <MyJumbotron />
                <NavBar/>
                <Cart />
                <MyFooter />
            </Route>
            <Route exact path="/success">
                <MyJumbotron />
                <NavBar/>
                <Success/>
            </Route>
            <Route exact path="/failed">
                <MyJumbotron />
                <NavBar/>
                <Fail/>
            </Route>
        </Switch>
        </>
    )
}

//export default KitchenContainer;
export default KitchenContainer