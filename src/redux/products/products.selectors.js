import { createSelector } from "reselect";

const selectProducts = state => state.products

export const selectClothesProducts = createSelector(
    [selectProducts],
    (products) => products.clothesProducts
)

export const selectTechProducts = createSelector(
    [selectProducts],
    (products) => products.techProducts
);

