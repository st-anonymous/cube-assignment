import { configureStore } from '@reduxjs/toolkit';
import currenCustomerReducer from './reducers/currentCustomer';

const store = configureStore({
  reducer: {
    currentCustomer: currenCustomerReducer,
  }
});

export default store;