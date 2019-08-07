import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
