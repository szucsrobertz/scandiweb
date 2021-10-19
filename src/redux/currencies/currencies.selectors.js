import { createSelector } from "reselect";

const selectCurrency = state => state.currency

export const selectCurrencyHidden = createSelector(
    [selectCurrency],
    (currency) => currency.hidden
)

export const selectCurrencies = createSelector(
    [selectCurrency],
    (currency) => currency.currencies
);

export const baseCurrency = createSelector(
   [ selectCurrency],
   (currency) => currency.baseCurrency
)
