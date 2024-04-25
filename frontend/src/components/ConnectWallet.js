import React from "react";
import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
 const containerStyle = {
    backgroundColor: '#f5f5f5', // Light grey background
    color: '#333', // Dark text
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Centers content vertically
    height: '100vh', // Ensures the container takes up the full viewport height
 };

 const buttonStyle = {
    backgroundColor: '#000000', // Bootstrap warning color
    color: '#fff',
    border: '0',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
 };

 return (
  <div style={containerStyle}>
    {networkError && (
    <NetworkErrorMessage 
      message={networkError} 
      dismiss={dismiss} 
    />
    )}
    <h2>"No act of kindness, no matter how small, is ever wasted." - Aesop</h2>
    <p>Please connect to your wallet.</p>
    <button
    style={buttonStyle}
    type="button"
    onClick={connectWallet}
    >
    Connect Wallet
    </button>
  </div>
 );
}
