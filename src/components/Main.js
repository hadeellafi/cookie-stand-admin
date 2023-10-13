'use client';
import Login from '../components/Login';
import CookieStandAdmin from '../components/CookieStandAdmin';

import React, { useState } from 'react';

function Main() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
  
    const loginUser = (loggedIn, token) => {
      setIsLoggedIn(loggedIn);
      setToken(token);
    };
  
    return (
      <div>
        {isLoggedIn ? <CookieStandAdmin /> : <Login LoginUser={loginUser} />}
      </div>
    );
  }
  
  export default Main;
  