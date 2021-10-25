import { Route, Switch, Redirect } from "react-router-dom";
import React, { Suspense, useState } from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import Footer from "./components/Layout/Footer";
import LoadingSpinner from './components/UI/LoadingSpinner'

const Meals = React.lazy(() => import('./components/Meals/Meals'))
const Home = React.lazy(() => import('./pages/Home'))
const ContactForm = React.lazy(() => import('./pages/ContactForm'))

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
      <Suspense fallback={ <div className='centered'><LoadingSpinner /></div>}>
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
        </Suspense>
      </main>
      <Footer />
      </CartProvider>
    
  );
}

export default App;


