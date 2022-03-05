import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { MapContainer } from '../components/ShowMap2';
import TestsGL from '../components/TestsGL';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <TestsGL />
                <Routes>
                    <Route path="/map" element={<MapContainer />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter