import React from 'react';
import { useAuth } from '../contexts/auth';

import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';
import Navbar from '../components/Navbar';

const Routes = () => {
  const { signed } = useAuth();
    console.log('Rotas',signed)
  return signed ?(<>
  <Navbar authorized={signed}/>
  <SignRoutes />
  </>):(<>
  <Navbar authorized={signed}/>
  <OtherRoutes /></>)   ; 
};

export default Routes;