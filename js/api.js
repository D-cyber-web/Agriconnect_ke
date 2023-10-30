
const express = require('express');
const router = express.Router();
const authRoutes = require('./routes/auth');

const express = require('express');
const router = express.Router();

// Dummy data for reports
const reports = [
  { id: 1, title: 'Report 1', content: 'This is the content of Report 1' },
  { id: 2, title: 'Report 2', content: 'This is the content of Report 2' },
  { id: 3, title: 'Report 3', content: 'This is the content of Report 3' },
];

// Dummy data for weather forecasts
const weatherForecasts = [
  { location: 'City A', forecast: 'Sunny with clear skies' },
  { location: 'City B', forecast: 'Partly cloudy with a chance of rain' },
  { location: 'City C', forecast: 'Cloudy with thunderstorms' },
];

// Reports Routes
router.get('/reports', (req, res) => {
  // Handle a GET request for a list of reports
  res.json(reports); // Sending the list of reports as a JSON response
});

router.get('/reports/:reportId', (req, res) => {
  // Handle a GET request for a specific report by ID
  const reportId = parseInt(req.params.reportId);
  const report = reports.find((r) => r.id === reportId);

  if (!report) {
    res.status(404).json({ error: 'Report not found' });
  } else {
    res.json(report);
  }
});

router.post('/reports', (req, res) => {
  // Handle a POST request to create a new report (dummy implementation)
  const newReport = req.body; // Assuming the request body contains the new report data
  newReport.id = reports.length + 1; // Assign a new ID
  reports.push(newReport);

  res.status(201).json(newReport);
});

// Weather Forecasts Routes
router.get('/weather', (req, res) => {
  // Handle a GET request for weather forecasts
  res.json(weatherForecasts); // Sending weather forecasts as a JSON response
});

router.get('/weather/:location', (req, res) => {
  // Handle a GET request for weather forecasts in a specific location
  const location = req.params.location;
  const forecast = weatherForecasts.find((w) => w.location === location);

  if (!forecast) {
    res.status(404).json({ error: 'Weather forecast not found' });
  } else {
    res.json(forecast);
  }
});

module.exports = router;


module.exports = router;
