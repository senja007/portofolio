import React from "react";

const Footer = () => {
const year = new Date().getFullYear();
  return (
  <div className="footer">
    <footer>{`Copyright © Neon Code ${year}`}</footer>
  </div>
  );
};

export default Footer;