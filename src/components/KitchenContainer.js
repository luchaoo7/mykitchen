import React from "react";
//import MyCarousel from '../components/Carousel';
import NavBar from './NavBar'
import MyJumbotron from './Jumbotron';
import MyFooter from './Footer';
import ItemList from './ItemList';
import products from '../data.json'
import ItemDetail from "./ItemDetail";
import { Route, Switch} from 'react-router-dom';


const KitchenContainer = (props) => {

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
        </Switch>
        </>
    )
}

export default KitchenContainer;