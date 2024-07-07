const express = require('express');
const cors  = require('cors')
const app = express();
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/")
.then(()=>console.log("DB connected"))
.catch(e=>console.log("DB FAIL"+e))

app.use(express.json());
app.use(cors())

app.use('/api', adminRoutes);
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});