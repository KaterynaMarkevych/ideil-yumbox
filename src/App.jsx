import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Orders from './components/Orders'
import { BasketProvider } from './components/BasketContext';

function App() {
  const [basketCount, setBasketCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToBasket = (price) => {
    setBasketCount(prevCount => prevCount + 1);
    setTotalPrice(prevTotal => prevTotal + price);
  };

  return (
    <BasketProvider>
      <>
        <Header basketCount={basketCount} totalPrice={totalPrice} addToBasket={addToBasket} />
        <Hero />
        <Orders addToBasket={addToBasket} />
      </>
    </BasketProvider>
  )
}

export default App
