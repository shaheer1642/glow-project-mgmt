import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import './index.css'
import theme from './theme.jsx'
import { ThemeProvider } from '@mui/material'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
)
