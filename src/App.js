import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import { GlobalStyle } from './globalStyles';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Featured />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
