import React from 'react';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';

import MainPage from './pages/MainPage'

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}