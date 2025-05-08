const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'Backend is running!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});