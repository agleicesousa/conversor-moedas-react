import React, { useState } from 'react';
import CurrencySelector from './CurrencySelector';

const rates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  JPY: 110,
};

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  const convert = () => {
    if (!amount) return;
    const rate = rates[toCurrency] / rates[fromCurrency];
    setResult(amount * rate);
  };

  console.log('CurrencyConverter component rendered');
  return (
    <div className="converter">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <CurrencySelector
        selectedCurrency={fromCurrency}
        onChangeCurrency={setFromCurrency}
      />
      <CurrencySelector
        selectedCurrency={toCurrency}
        onChangeCurrency={setToCurrency}
      />
      <button onClick={convert}>Convert</button>
      {result !== null && (
        <div className="result">
          {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;