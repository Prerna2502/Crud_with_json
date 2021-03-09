import './App.css';
import Header from './CRUD_with_Json/Header/Header'
// import Main from './CRUD_with_Json/Main/Main'
import Footer from './CRUD_with_Json/Footer/Footer'
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './CRUD_with_Json/Home/Home';
import About from './CRUD_with_Json/About/About';
import Contact from './CRUD_with_Json/Contact/Contact';
import ShowProduct from './CRUD_with_Json/Product/ShowProduct/ShowProduct'
import AddProduct from './CRUD_with_Json/Product/AddProduct/AddProduct'
import NotFound from './NotFound/NotFound';

function App() {
  localStorage.setItem('products', []);
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/show_product' component={ShowProduct} />
          <Route exact path='/add_product' component={AddProduct} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
