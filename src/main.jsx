import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Router from './routes/Router'
import { TokenProvider } from './utils/context/token'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenProvider>
      <Router/>
    </TokenProvider>
  </React.StrictMode>,
)
