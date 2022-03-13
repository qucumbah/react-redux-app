import {configureStore} from '@reduxjs/toolkit';

import stringItemsReducer from './slices/stringItemsSlice';
import searchStringReducer from './slices/searchStringSlice';

export const store = configureStore({
  reducer: {
    stringItems: stringItemsReducer,
    searchString: searchStringReducer,
  },
});

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
