import React from 'react';
import FABLike from '../FAB/FABLike';
import Navbar from '../Navbar/Navbar';

const Layout = (props) => {

  const {children} = props;

  return (
    <div className="layout">
        <Navbar />

        <div className="main">
            {children}
        </div>

        <FABLike />
    </div>
  );
};

export default Layout;
