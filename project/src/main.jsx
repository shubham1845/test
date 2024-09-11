// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import the bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// const name = 'John Smith';

// // JSX elements that utilizes html and JS to properly load html elements and JS code together

// const element = <h1>Hello, {name}</h1>

// // root variable created to select root elements found in the index.html file
// const root = ReactDOM.createRoot(document.getElementById('root'));

// //renders the JXS elements created in the "element" variable in the root

// root.render(element);