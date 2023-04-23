const express = require('express');
const app = express();

// Sample data
let resources = [
    { id: 1, Milan: "number: 8596221529" },
    { id: 2, Ayush: "number: 3476658907" },
    { id: 3, Liam: "number: 9870000000" }
];

// Get all resources
app.get('/resources', (req, res) => {
    res.send(resources);
});

// Get a specific resource
app.get('/resources/:id', (req, res) => {
    const resource = resources.find(r => r.id === parseInt(req.params.id));
    if (!resource) return res.status(404).send("Resource not found");
    res.send(resource);
});

// Create a new resource
app.post('/resources', (req, res) => {
    const resource = {
        id: resources.length + 1,
        name: req.body.name
    };
    resources.push(resource);
    console.log("Resource created:", resource);
    res.send(resource);
});

// Update an existing resource
app.put('/resources/:id', (req, res) => {
    const resource = resources.find(r => r.id === parseInt(req.params.id));
    if (!resource) return res.status(404).send("Resource not found");
    resource.name = req.body.name;
    console.log("Resource updated:", resource);
    res.send(resource);
});

// Delete an existing resource
app.delete('/resources/:id', (req, res) => {
    const resourceIndex = resources.findIndex(r => r.id === parseInt(req.params.id));
    if (resourceIndex === -1) return res.status(404).send("Resource not found");
    const resource = resources.splice(resourceIndex, 1)[0];
    console.log("Resource deleted:", resource);
    res.send(resource);
});

// Listen to port 3000
app.listen(3000, () => console.log("Server running on port 3000"));
