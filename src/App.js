import React from 'react';
import AppRouter from './router/Router';
import AuthContextProvider from './context/AuthContext';

const App = () => {
    return (
        <div className='App'>
            <AuthContextProvider>
                <AppRouter/>
            </AuthContextProvider>
        </div>
    )
}

export default App
