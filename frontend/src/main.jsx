import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import amountReducer from './Reducer/AnyName.jsx'
import { configureStore } from '@reduxjs/toolkit'

import amountReducer from './Slices/sliceName.jsx'
import userReducer from './Slices/userSlice.jsx';




const store = configureStore({
  reducer: {
    amountName: amountReducer, // global state.amountName
    user: userReducer,
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
