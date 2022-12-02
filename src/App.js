import React from "react";
import { Header, Footer, Blog, Possiblity, Features, WhatGPT3 } from "./containers";
import { CTA, Branding, Navbar } from './components';
import './app.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Branding />
            <WhatGPT3 />
            <Features />
            <Possiblity />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;