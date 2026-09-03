import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"

import { ThemeProvider } from './src/components/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <Router>
        <App />
        <Toaster />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
