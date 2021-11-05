import React, { useState, useEffect} from "react";
//import MyCarousel from '../components/Carousel';
import NavBar from './NavBar'
import MyJumbotron from './Jumbotron';
import MyFooter from './Footer';
import ItemList from './ItemList';
//import products from '../data.json'
import ItemDetail from "./ItemDetail";
import Cart from "./Cart";
import { Route, Switch} from 'react-router-dom';
import Success from "./Success";
import Fail from "./Fail";
import Contact from "./Contact";

//import { withAuthenticator } from '@aws-amplify/ui-react'
//import { AmplifySignOut } from '@aws-amplify/ui-react'

import { API } from 'aws-amplify';
import { listItems } from '../graphql/queries'

import axios from 'axios';

//import { createItem as createItemMutation, deleteItem as deleteItemMutation } from '../graphql/mutations';

const KitchenContainer = (props) => {

    const [items, setItems] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        fetchItems();
    }, []);

    async function fetchItems() {
        const apiData = await API.graphql({ query: listItems });
        console.log(apiData.data.listItems.items);

        try {
            const response = await axios.get("https://a2lz8qzjc2.execute-api.eu-west-1.amazonaws.com/default/checkoutSession-staging");
            console.log(`Axios Response is: ${response}`);
            console.log(name);
            setName(response);
        } catch (error) {
            console.log(error);
            console.log("Error, axios failed");
        }


        console.log(JSON.stringify(apiData.data.listItems.items))
        setItems(apiData.data.listItems.items);
    }


    return (
        <>
        <Switch>
            <Route exact path="/">
                <MyJumbotron />
                <NavBar/>
                <ItemList products={items}/>
                <MyFooter />
            </Route>
            <Route exact path="/details/:slug">
                <MyJumbotron />
                <NavBar/>
                <ItemDetail />
                <MyFooter />
            </Route>
            <Route exact path="/contact">
                <MyJumbotron />
                <NavBar/>
                <Contact />
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
//export default KitchenContainer
export default KitchenContainer;