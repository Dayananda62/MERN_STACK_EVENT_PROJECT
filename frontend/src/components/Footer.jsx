import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>BookMyEvent</h1>
          <p>Every event finds its perfect home</p>
        </div>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} BookMyEvent. All rights reserved.</p>
      </footer>
  );
};

export default Footer;
