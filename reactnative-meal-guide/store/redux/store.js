import { configureStore } from '@reduxjs/toolkit';

import favouritesReducer from './favorites';

export const store = configureStore({
    reducer: {
        favouritesMeals: favouritesReducer
    }
});