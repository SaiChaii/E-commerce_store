import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import WishList from './containers/WishList';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Mobile from './containers/Mobile';
import Electronics from './containers/Electronics';
import Mens from './containers/Mens';
import Womens from './containers/Womens';
import Groceries from './containers/Groceries';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Appliances from './containers/Appliances';
import Fashion from './containers/Fashion';
const LazyMens = React.lazy(() => import('./containers/Mens'));
const LazyWomens = React.lazy(() => import('./containers/Womens'));
const LazyKids = React.lazy(() => import('./containers/Kids'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content-container">
          <Switch style={{ marginTop: '10000px' }}>
            <Route path="/home" component={Home} />
            <Route path="/allproducts" component={ProductListing} />
            <Route path="/product/:productId" component={ProductDetail} />
            <Route path="/wishlist" component={WishList} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/groceries" component={Groceries}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/mobiles" component={Mobile}/>
            <Route path="/appliances" component={Appliances}/>
            <Route path='/fashion' component={Fashion}/>
            <Route path='/electronics' component={Electronics}/>
            <Route path="/mens">
              <React.Suspense fallback="Loading....">
                <LazyMens />
              </React.Suspense>
            </Route>
            <Route path="/women">
              <React.Suspense fallback="Loading...">
                <LazyWomens />
              </React.Suspense>
            </Route>
            <Route path="/kids">
              <React.Suspense fallback="Loading...">
                <LazyKids />
              </React.Suspense>
            </Route>
            <Route>404 Not Found</Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
