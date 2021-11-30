import './App.css';
import Banner from './components/banner';
import Header from './components/header';
import NavDown from './components/nav_down';
import ProductFeed from './components/product_feed';
import Footer from './components/footer';
import TopScroll from './components/top_scroll';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Cart from './pages/cart';
import Home from './components/home';
function App() {
  return (
    <div className="app">
      <Router>
     <Provider store = {store}>
      <Header />
     <NavDown />
      <Routes> 
        <Route path='/cart' element= {<Cart />}/>
        <Route path = '/' element= {<Home />} />
       </Routes>
      <TopScroll />
       <Footer />
       </Provider>
       </Router>
    </div>
  );
}

export default App;
