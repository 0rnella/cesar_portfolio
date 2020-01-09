import React from "react";
import "../styling/Footer.css";

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        {"   "}Academia.edu:{" "}
        <a
          href="https://columbia.academia.edu/C%C3%A9sarCabezas"
          target="_blank"
          rel="noopener noreferrer"
        >
          /CésarCabezas
        </a>
      </p>
      <p>
        <a href="cgc2125@columbia.edu">cgc2125@columbia.edu</a>
      </p>
      <p>
        New York, NY, USA
      </p>
    </footer>
  );
}

export default Footer;
