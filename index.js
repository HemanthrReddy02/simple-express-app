const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req,res)=> res.json({ message: 'Hello from simple-express-app' }));
app.get('/health', (req,res)=> res.status(200).send('OK'));
app.listen(port, ()=> console.log(`Listening on ${port}`));
