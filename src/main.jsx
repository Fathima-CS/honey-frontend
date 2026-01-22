import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import theme from './theme/muiTheme.js';
import { GoogleOAuthProvider } from '@react-oauth/google'
/* ===============================
   PRELOAD FIXED USERS (RUN ONCE)
   =============================== */
if (!localStorage.getItem('users')) {
  localStorage.setItem(
    'users',
    JSON.stringify([
      {
        email: 'admin@honeyhub.com',
        password: 'admin123',
        role: 'admin',
      },
      {
        email: 'seller@honeyhub.com',
        password: 'seller123',
        role: 'seller',
      },
      {
        email: 'user@honeyhub.com',
        password: 'user123',
        role: 'user',
      },
    ])
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider  clientId='415960131193-968are3dmsvbv87og1ojhokrejj95bbp.apps.googleusercontent.com'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
