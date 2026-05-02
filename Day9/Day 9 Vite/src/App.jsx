import React from 'react'
import My from './components/WellCome'
import WellCome from './components/WellCome'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid';


const products = [
  { id: 1, title: "Wireless Mouse", price: 29.99 },
  { id: 2, title: "Mechanical Keyboard", price: 89.50 },
  { id: 3, title: "USB-C Cable (2m)", price: 12.75 },
  { id: 4, title: "27-inch Monitor", price: 199.99 }
];
const App = () => {
  return (
    <> 
    <Header title='E-Commerce App' subtitle='Affordable & Quality Items' />
   {/* <WellCome  name='hamza'/>*/}
   <ProductGrid products={products} />
   

    </>
  )
}

export default App
