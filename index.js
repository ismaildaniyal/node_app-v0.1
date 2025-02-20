const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect('mongodb://mongo_container:27017/mydatabase')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('MongoDB is connected successfully');
});


app.get('/hello', (req, res) => {
  res.send('Hello you running thehelo api');
});

app.get('/test', (req, res) => {
  res.send('test');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

