import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from '../../contexts/AuthContext';
import Register from '../../pages/RegisterPage';
import Login from '../../pages/LoginPage';
import ProtectedRoute from '../../routes/ProtectedRoute';

import Home from '../../pages/HomePage';
import MainHome from '../../pages/MainHomePage';
import { DataProvider } from "../../contexts/DataContext";

const queryClient = new QueryClient();

const AppWrapper = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router>
                    <MainApp />
                </Router>
            </AuthProvider>
        </QueryClientProvider>
    );
};

const MainApp = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/home';

    return (
        <DataProvider condition={isHomePage}>
            <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            </Routes>
        </DataProvider>
    );
};

export default AppWrapper;
