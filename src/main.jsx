import React from 'react'
import ReactDOM from 'react-dom/client'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import './../node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css';       
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
