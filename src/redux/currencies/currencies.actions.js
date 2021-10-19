import CurrenciesActionTypes from "./currencies.types";

export const toggleCurrencyHidden = () => ({
    type: CurrenciesActionTypes.TOGGLE_CURRENCY_HIDDEN
})

export const getCurrencies = item => ({
    type: CurrenciesActionTypes.GET_CURRENCIES,
    payload: item,
  });

export const changeBaseCurrency = item => ({
    type: CurrenciesActionTypes.CHANGE_BASE_CURRENCY,
    payload:item
})
  