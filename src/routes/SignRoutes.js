import React from 'react';
import { Route, Routes } from 'react-router-dom';
import People from "../pages/People";
import Starship from "../pages/Starship";

const SignRoutes = () => {
  return (
    <Routes>
          <Route path="/people" element={<People />} />
          <Route path="/starships" element={<Starship />} />
    </Routes>
  );
};

export default SignRoutes;