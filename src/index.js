import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TodoProvider } from './Context/TodoContext';
import { CounterProvider } from './Context/CounterContext';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoProvider>
    <CounterProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CounterProvider>
  </TodoProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
