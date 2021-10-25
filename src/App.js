import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import Home from "./pages/Home";
import Footer from "./components/Layout/Footer";
import ContactForm from "./pages/ContactForm";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
      
        
      <main>
        <Switch>

        <Route path="/" exact>
            <Redirect to='/home' />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/products" exact>
            <Meals />
          </Route>

          <Route path="/contact" exact>
            <ContactForm />
          </Route>

        </Switch>
        
      </main>
      <Footer />
      </CartProvider>
    
  );
}

export default App;


