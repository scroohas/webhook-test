const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST API
app.post('/api/variables', (req, res) => {
    const variables = req.body;

    if (!Array.isArray(variables) || variables.length === 0) {
        return res.status(400).json({ message: "Invalid input. An array of variables is required." });
    }

    // Validate the input
    const isValid = variables.every(variable => {
        return variable.variable_name && variable.datetime && variable.value && variable.variableId;
    });

    if (!isValid) {
        return res.status(400).json({ message: "Invalid data. Each object must have variable_name, datetime, value, and variableId." });
    }

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
