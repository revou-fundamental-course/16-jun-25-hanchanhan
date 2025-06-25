const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;

//Script for calculator
app.use(express.static(path.join(__dirname)));
app.get('/calculator', (req, res) => {
  res.sendFile(path.join(__dirname, 'calculator.html'));
});
// Serve the calculator script
app.get('/calculator.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'calculator.js'));
});

