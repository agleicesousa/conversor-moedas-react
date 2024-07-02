import { useState } from 'react'
import './App.css'
import CurrencyConverter from './components/CurrencyConverter'

const App = () => {
  console.log('App rendered')
  return (
    <div className="app">
      <h1>Conversor de Moedas</h1>
      <CurrencyConverter/>
    </div>
  )
}

export default App
