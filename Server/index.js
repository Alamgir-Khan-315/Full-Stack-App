const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  
require('dotenv').config();

const UserRoute = require('./Routes/UserRoute');

const app = express();
const port = process.env.PORT || 3000;
const db = process.env.MONGO_URI;

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'https://full-stack-app-frontend-beta.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

mongoose.connect(db)
  .then(() => console.log(`✅ MongoDB Connected on port ${port}`)) 
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.use('/api/users', UserRoute);


app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});

module.exports = app;