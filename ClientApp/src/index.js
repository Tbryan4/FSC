import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Navbar2} from "./Components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Navbar2></Navbar2>,
    <App></App>
)