const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST API
app.post('/api/variables', (req, res) => {
    const variables = req.body;

    console.log(variables)

    // Respond back with the received data
    return res.status(200).json({
        message: "Data received successfully.",
        data: variables
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
