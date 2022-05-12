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
//import v4 from 'uuid';
import { usePageVisibility } from 'react-page-visibility';

import 'react-chat-widget/lib/styles.css';
//import { API } from 'aws-amplify';
//import { withAuthenticator } from '@aws-amplify/ui-react'
//import { AmplifySignOut } from '@aws-amplify/ui-react'
//import { listItems } from '../graphql/queries'
import { Widget, addResponseMessage } from "react-chat-widget";
var W3CWebSocket = require('websocket').w3cwebsocket;


const ENDPOINT_AWS = 'wss://p5jfqut3c8.execute-api.eu-west-2.amazonaws.com/dev';
//import { createItem as createItemMutation, deleteItem as deleteItemMutation } from '../graphql/mutations';
const KitchenContainer = (props) => {

    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [socket, setSocket] = useState(null);
    const isVisible = usePageVisibility();

    console.log(isVisible);

    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
    }, []);

    useEffect(() => {

        let connected = localStorage.getItem("connected");

        if(connected){
            console.log(`we are connected here: ${connected}`)
            //window.open("about:blank", "_self");
            //window.close();
        }


        let ioSocket = new W3CWebSocket(ENDPOINT_AWS);
        setSocket(ioSocket);


        // listen for messages
        ioSocket.onmessage = function(message) {
            console.log(message.data);
        }
        
        // listen for closed connection
        ioSocket.onclose = function(event) {
            localStorage.setItem("connected", false);
        }

        // listen for open connection
        ioSocket.onopen = function() {
            localStorage.setItem("connected", true);
        }

    }, [setSocket]);


    const handleNewUserMessage = (newMessage) => {

        socket.onmessage = function(message) {
            console.log("Message received");
            console.log(message.data);
            addResponseMessage( "Agent: "+ message.data);
        }

        let decider = newMessage.split(":");
        if(decider.length > 0 && decider[0].trim().toLowerCase() === "to") {
            // Send to everyone specific person
            // The to, will be determined in backend
            let sendTo = decider[1];
            socket.send(JSON.stringify({action:"sendtomessage", message: newMessage, to: sendTo}))
        } else {
            // Send to everyone
            socket.send(JSON.stringify({action:"sendmessage", message: newMessage}))
            console.log("Agent:" + newMessage)
        }

        // Now send the message throught the backend API
    };

    useEffect(() => {
        fetchItems();

        let myCart = localStorage.getItem("cart");
        if(myCart){
            setCart(JSON.parse(myCart));
            localStorage.setItem("cart", myCart);
        } else {
            localStorage.setItem("cart", cart);
        }
    }, [setCart]);

  useEffect(() => {

    return () => {
        localStorage.setItem("connected", false);
        if(socket && socket.OPEN === 1){
            socket.close()
            console.log("we are here now")
        }
    }
    }, []);
   

    
    async function fetchItems() {
        //const apiData = await API.graphql({ query: listItems });
        //console.log(apiData.data.listItems.items);

        try {
        } catch (error) {
            console.log(error);
            console.log("Error, axios failed");
        }


        //console.log(JSON.stringify(apiData.data.listItems.items))
        //setItems(apiData.data.listItems.items);
    }

    return (
        <>
        <Switch>
            <Route exact path="/">
                <MyJumbotron />
                <NavBar amount={cart.length ? `:${cart.length}`: ""}/>
                <Widget 
                    handleNewUserMessage={handleNewUserMessage}
                    title="Help Line"
                    subtitle="Recovery"
                />
                <ItemList products={items} setCart={setCart}/>
                <MyFooter />
            </Route>
            <Route exact path="/details/:slug">
                <MyJumbotron />
                <NavBar amount={cart.length ? `:${cart.length}`: ""}/>
                <ItemDetail />
                <MyFooter />
            </Route>
            <Route exact path="/contact">
                <MyJumbotron />
                <NavBar amount={cart.length ? `:${cart.length}`: ""}/>
                 <Widget 
                    handleNewUserMessage={handleNewUserMessage}
                    title="Help Line"
                    subtitle="Recovery"
                />
                <Contact />
            </Route>
            <Route exact path="/cart">
                <MyJumbotron />
                <NavBar amount={cart.length ? `:${cart.length}`: ""}/>
                <Cart cart={cart}/>
                <MyFooter />
            </Route>
            <Route exact path="/success">
                <MyJumbotron />
                <NavBar amount={cart.length ? `:${cart.length}`: ""}/>
                <Success/>
            </Route>
            <Route exact path="/failed">
                <MyJumbotron />
                <NavBar amount={cart.length ? `:${cart.length}`: ""}/>
                <Fail/>
            </Route>
        </Switch>
        </>
    )
}

//export default KitchenContainer;
//export default KitchenContainer
export default KitchenContainer;