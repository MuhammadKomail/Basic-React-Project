import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from ".";


export default function AppRouter() {
    return (
        <Router >
            <div>
                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>
            </div>
        </Router>
    )
}