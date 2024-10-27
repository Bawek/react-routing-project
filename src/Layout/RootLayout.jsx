import React from 'react';
import Nav from "../component/Nav";
import { Outlet } from 'react-router-dom'; // Import Outlet correctly

const RootLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet /> {/* Use <Outlet /> as a component */}
    </div>
  );
};

export default RootLayout;
