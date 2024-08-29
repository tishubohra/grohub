import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pagenotfound from "./pages/Pagenotfound";
import Review from "./pages/Review";
import { useState } from "react";
import Contact1 from "./pages/Contact1";
import CartList from "./pages/CartList";
import "./App.css"
import Where from "./pages/where";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [product, setProduct] = useState([
    {
      url: 'https://nurserylive.com/cdn/shop/products/nurserylive-miniature-rose-button-rose-any-color-plant-1-158202_222x295.jpg?v=1679750627',
      name: 'Miniature Rose || Flower',
      category: '',
      seller: 'GrowHub',
      price: 350
    },
    {
      url: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-top-4-die-hard-succulents-pack-980804_295x295.jpg?v=1679751768',
      name: 'Succelent Pack || Succelent',
      category: '',
      seller: 'GrowHub',
      price:  800
    },
    {
      url: 'https://nurserylive.com/cdn/shop/products/nurserylive-plant-elephant-bush-portulacaria-afra-jade-green-plant-in-4.5-inch-11-cm-ronda-No-1110-round-plastic-green-planter-1-629198_222x295.jpg?v=1679749890',
      name: 'Elephant bush, Portulacaria afra, Jade plant || Succelent Plant',
      category: '',
      seller: 'GrowHub',
      price: 500
    },
    {
      url: 'https://nurserylive.com/cdn/shop/products/nurserylive-seeds-guava-amrud-allahabadi-seeds_295x295.jpg?v=1634220911',
      name: 'Gauva || Edible Plan',
      category: '',
      seller: 'GrowHub',
      price: 1400
    },
    {
      url: 'https://nurserylive.com/cdn/shop/products/nurserylive-plant-money-plant-scindapsus-green-plant-in-4.5-inch-11-cm-ronda-no-1110-round-plastic-turquoise-plant-1-661701_222x295.jpg?v=1679750636',
      name: 'Money Plant || Indoor Plant',
      category: '',
      seller: 'GrowHub',
      price: 2000
    },
    {
      url: 'https://nurserylive.com/cdn/shop/products/nurserylive-plants-orange-fruit-santra-grafted-plant-16969145090188_512x512.jpg?v=1634225134',
      name: 'Orange || Edible Plant',
      category: '',
      seller: 'GrowHub',
      price: 500
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage count={cart.length} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/where" element={<Where />} />
        <Route
          path="/product"
          element={<ProductDetail product={product} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<CartList cart={cart} />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact1 />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
