import React from "react";
//import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      
    </div>
  );
};

export default Layout;
