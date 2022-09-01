//import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home/Home';
import Result from './pages/Result/Result';

import useFetchForce from './Components/useFetchForce';
import UserContext from './Components/UserContext';

const App = () => {
    const { request, force, loading, error } = useFetchForce();    
    return (
        <UserContext.Provider value={{ request, force, loading, error }}>
        <React.Fragment>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/result" element={<Result />} />
            </Routes>
            </BrowserRouter>
        </React.Fragment>
        </UserContext.Provider>
    );
}

export default App;