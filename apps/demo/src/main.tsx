import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const root = createRoot(document.getElementById('root')!)
root.render(<App />)

// Inform docs that demo was loaded when embedded
// eslint-disable-next-line no-undef
;(window as any).__DEMO_LOADED__ = true
