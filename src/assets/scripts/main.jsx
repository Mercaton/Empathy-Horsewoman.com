import React from 'react'
import ReactDOM from 'react-dom/client'
import '/src/assets/scss/_main.scss';
import Header from "./templates/Header.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
)
