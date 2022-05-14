/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import getRoutes from "../Services/Routes";


const RouterPages = (): JSX.Element => {
  const routes = useMemo(() => getRoutes(), []);
  
  return (
    <BrowserRouter>
        <Routes>
          {routes.map((route, i) => (
              <Route
                key={i}
                element={<route.component />}
                path={route.path} 
                />
               ))}
        </Routes>
    </BrowserRouter>
  );

}
export default RouterPages;