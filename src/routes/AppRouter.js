import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import ShowMap from '../components/ShowMap';
import TestsGL from '../components/TestsGL';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <TestsGL />
                <Routes>
                    <Route path="/map" element={<ShowMap />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter