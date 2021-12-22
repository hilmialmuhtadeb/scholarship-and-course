import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, MainApp, Register } from '../../pages';

const Routes = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState();
  
  useEffect(() => {
    const getUserAuth = async () => {
      const response = await axios.get('http://localhost:4000/v1/auth/user', {
        withCredentials: true,
      });

      const user = response.data;
      setAuthenticatedUser(user);
    };

    getUserAuth();
  });
  
  return (
    <Router>
      <Switch>

        <Route path='/login'>
          <Login user={authenticatedUser} />
        </Route>

        <Route path='/register'>
          <Register user={authenticatedUser} />
        </Route>
        
        <Route path='/' >
          <MainApp user={authenticatedUser} />
        </Route>
        
      </Switch>
    </Router>
  )
}

export default Routes
