import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// Define a component for the basic UI
function Homepage() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#007bff", // Blue background color
    color: "#fff", // White text color
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1rem",
  };

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#000000",
    color: "#fff",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
  };

  const quoteStyle = {
    fontStyle: "italic",
    textAlign: "center",
    marginTop: "2rem",
  };

  const renderDapp = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Blockchain Based Charity Donation Platform</h1>
      <p style={quoteStyle}>
        "The best way to find yourself is to lose yourself in the service of
        others." - Mahatma Gandhi
      </p>
      <Link to="/dapp">
        <button style={buttonStyle} onClick={renderDapp}>
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Homepage
