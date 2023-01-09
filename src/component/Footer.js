import React from "react";

const Footer = () => {
const year = new Date().getFullYear();
  return (
  <div className="footer">
    <span>Neon Code</span>
    <footer>{`Copyright © Neon Code ${year}`}</footer>
  </div>
  );
};

export default Footer;