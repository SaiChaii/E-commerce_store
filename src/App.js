import './App.css';
import {BrowserRouter, Switch,Route} from "react-router-dom"
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import WishList from './containers/WishList';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='content-container'>
          <Switch style={{ marginTop: '10000px' }}>
            <Route path="/home" component={ProductListing} />
            <Route path="/product/:productId" component={ProductDetail} />
            <Route path="/wishlist" component={WishList}/>
            <Route>404 Not Found</Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
