const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const dbPath = path.join(__dirname, 'db.json');

// Middleware
app.use(cors()); // Allows requests from your frontend
app.use(express.json()); // Allows the server to read JSON from requests

// --- API ROUTES ---

// GET all patients
app.get('/api/patients', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading database" });
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData.patients);
  });
});

// POST a new patient
app.post('/api/patients', (req, res) => {
  const newPatient = req.body;

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading database" });
    }
    
    const jsonData = JSON.parse(data);
    
    // Create a new ID
    const newId = jsonData.patients.length > 0 ? Math.max(...jsonData.patients.map(p => p.id)) + 1 : 1;
    newPatient.id = newId;

    jsonData.patients.push(newPatient);

    fs.writeFile(dbPath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing to database" });
      }
      res.status(201).json(newPatient);
    });
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});