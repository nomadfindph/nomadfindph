import React from 'react';
import ReactDOM from 'react-dom/client';
import Favorites from './favorites';
import Navbar from './navbar';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navbar />
        <Favorites />
        <Footer />
    </>
);