import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/pages/home';
import About from './components/pages/about';
import Projects from './components/pages/projects';

export const routes = [
  {
    path: '/',
    component: <Home/>,
    exact: true,
    label: 'Home',    
  },
  {
    path: '/about',
    component: <About/>,
    exact: true,
    label: 'About',    
  },  
  {
    path: '/projects',
    component: <Projects/>,
    exact: true,
    label: 'Projects',    
  },    
];

export const RouteList = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        element={route.component}
      />
    ))}
  </Routes>
);

export default {
  RouteList,
  routes
}
