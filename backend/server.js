const express = require('express');

const app = express();

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {res.send('sabko!!!!')})

app.listen(5001, () => console.log(`server running on ${PORT}`));