import React from 'react';

const currencies = ['USD', 'EUR', 'GBP', 'JPY'];

const CurrencySelector = ({ selectedCurrency, onChangeCurrency }) => {
  console.log('CurrencySelector component rendered');
  return (
    <select
      value={selectedCurrency}
      onChange={(e) => onChangeCurrency(e.target.value)}
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;
