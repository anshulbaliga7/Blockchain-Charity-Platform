import React from "react";

export function NoTokensMessage({ selectedAddress }) {
 const messageStyle = {
    backgroundColor: '#f5f5f5', // Light grey background
    color: '#333', // Dark text
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
 };

 const codeStyle = {
    backgroundColor: '#000000', // Light grey background for code
    padding: '5px',
    borderRadius: '5px',
 };

 return (
    <div style={messageStyle}>
      <p>You don't have tokens to transfer</p>
      <p>
        To get some tokens, run the following command: 
        <br />
        <br />
        <code style={codeStyle}>npx hardhat --network localhost faucet {selectedAddress}</code>
      </p>
    </div>
 );
}
