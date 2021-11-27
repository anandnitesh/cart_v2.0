import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';  
import Navigation from './Components/Navigation';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './pages/CartContext';
import { useState, useEffect } from 'react';
import { getCart, storeCart } from './helpers';

const App = () => { //function App(){

     const [cart, setCart] = useState({});
    // //Fetch cart from local storage

     useEffect(() => {
         getCart().then(cart => { //here cart is a local variable.
            setCart(JSON.parse(cart));
         });
        //const cart = getCart(); //On page load fetched 'cart' from local storage .
        // // and then stored in our state using 'setCart'.
    }, [])

    useEffect(() => {
        storeCart(JSON.stringify(cart));
        //window.localStorage.setItem('cart', JSON.stringify(cart)); //we can only store string in local storage, so had to convert cart object to json.
    }, [cart]); 


    //  useEffect(() => {   ///
    //     const cart = window.localStorage.getItem('cart'); //On page load fetched 'cart' from local storage .
    //     setCart(JSON.parse(cart)); // and then stored in our state using 'setCart'.
    // }, [])

    // useEffect(() => {
    //     window.localStorage.setItem('cart', JSON.stringify(cart)); //we can only store string in local storage, so had to convert cart object to json.
    // }, [cart]);


// const [ cart, setCart ] = useState({});

//     // Fetch cart from local storage
//     useEffect(() => {
//         getCart().then(cart => {
//         setCart(JSON.parse(cart));
//         });
//     }, []);

//     useEffect(() => {
//         storeCart(JSON.stringify(cart));
//     }, [cart]);

    return(
        <>
            <Router>
                <CartContext.Provider value = {{cart, setCart}} > 
                    {/* value = {{ cart, setCart }} */}
                            {/* <Link  to = "/">Home</Link>
                            <Link to = "/About">About</Link> */}
                        <Navigation/>

                        <Switch>
                            <Route path = "/" component={Home} exact></Route>
                            {/* <Route path = "/About" component = {About} exact></Route> */}
                            <Route path = "/Products" component = {ProductsPage} exact></Route>
                            <Route path = "/products/:_id" exact component={SingleProduct} exact></Route>
                            <Route path = "/Cart" component = {Cart} ></Route> 
                        </Switch>

                </CartContext.Provider>
            </Router>
        </>
    )



    // <div>
    //      <h1>Hello from the App components</h1>
    // </div>
}

export default App;  

