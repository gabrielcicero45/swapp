import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from "../pages/SignUp";
import Login from '../pages/Login';

const OtherRoutes= () => {
  return (
    <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default OtherRoutes;