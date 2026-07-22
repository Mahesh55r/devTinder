const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user')
const app = express();


app.post('/signUp', async (req,res) => {
   const user = new User({
       firstName: 'Virat',
       lastName: 'kohli',
       email: 'virat@kohli.com',
       password: 'virat@123',
   })

   try {
       await user.save();
       res.send('User created successfully');
   } catch (err) {
       res.status(400).send(err.message);
   }
   
})

connectDB().then(() => {
    console.log('Database connected successfully');
app.listen(7777, () => {
    console.log('Server is running on port 7777');
})
}).catch((err) => {
    console.log('Database cannot be connected!!');
})




