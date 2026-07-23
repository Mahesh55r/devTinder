const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user')
const app = express();

app.use(express.json())

app.post('/signUp', async (req,res) => {
   const user = new User(req.body);
   try {
       await user.save();
       res.send('User created successfully');
   } catch (err) {
       res.status(400).send(err.message);
   }
})

app.get('/user', async(req, res) => {
const userEmail = req.body.email
const userId = req.body._id
    try {
      const users = await User.find({email: userEmail})
      if(users?.length === 0) {
        res.status(400).send('User not found')
      } else  {
        res.send(users)
      }
    } catch(err) {
        res.status(400).send(err.message);
    }

    // try {
    //   const user = await User.findById(userId)
    //   if(!user) {
    //     res.status(400).send('User not found')
    //   } else {
    //     res.send(user)

    //   }
    // } catch(err) {
    //     res.status(400).send(err.message);
    // }

    //   try {
    //     //if you are not using sort then it will return users on natural order may be firts registered one or oldest document if you give sort and -1 then it will give newest record and sort with 1 then it will give oldest or first record found
    //   const users = await User.findOne({email: userEmail}).sort({_id: -1})
    //   if(!users) {
    //     res.status(400).send('User not found')
    //   } else  {
    //     res.send(users)
    //   }
    // } catch(err) {
    //     res.status(400).send(err.message);
    // }
})


app.get('/feed', async(req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch(err) {
    res.status(400).send(err.message);
  }
});

app.delete('/user', async (req, res) => {
    const userId = req.body.userId
    try {
     const user = await User.findByIdAndDelete(userId)
     res.send('User deleted successfully')
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




