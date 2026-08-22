const express = require("express");
const { userAuth } = require("../middlewares/auth");
const { validateProfileEditFields } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require('bcrypt');
const validator = require('validator')

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
  validateProfileEditFields(req)

    const loggedInUser = req.user;
    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
    await loggedInUser.save()
    res.json({
      message: `${loggedInUser.firstName} your profile updated successfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

profileRouter.patch('/profile/password', async(req,res) => {
  try {
const {email, newPassword} = req.body;


if(!validator.isEmail(email)) {
  throw new Error('Enter Valid email')
} else if( !validator.isStrongPassword(newPassword)) {
  throw new Error('Enter Strong Password')
}
const allowedFields = ["email", "newPassword"];

const inValidFields = Object.keys(req.body).filter((key) => !allowedFields.includes(key));

if(inValidFields?.length > 0) {
  throw new Error(`Invalid fields: ${inValidFields.join(',')}`)
}

const user = await User.findOne({email: email});

if(!user) {
  throw new Error('User does not exist')
}

user.password = await bcrypt.hash(newPassword, 10);
await user.save();
res.json({
  message: 'Password updated successfully',
  data: user
})
  } catch(err) {
    res.status(400).send('ERROR: ' + err.message)
  }
})

module.exports = profileRouter;
