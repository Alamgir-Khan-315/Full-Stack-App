const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const UserRoute = require('./Routes/UserRoute');

const app = express();
const port = process.env.PORT || 3000; 
const db = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));


app.use('/api/users', UserRoute);

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
