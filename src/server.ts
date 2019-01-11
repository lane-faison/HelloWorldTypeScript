import express from 'express';
const app = express()

// Can add anything after the / to make custom get routes
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/colorado', (req, res) => res.send('Hello Colorado!'));
app.get('/lane', (req, res) => res.send('Hello Lane!'));

app.listen(3000, () => console.log('Example app listening on port 3000'));