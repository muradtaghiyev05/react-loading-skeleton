import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SkeletonTheme>
)
