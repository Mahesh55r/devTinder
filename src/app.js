const express = require('express');
const app = express();

app.use('/user',(req, res, next)=> {
    // res.send('Response!!')
    next();
}, (req, res, next) => {
    // res.send('2nd Response!!');
    next();
}, (req, res, next) => {
    // res.send('3rd Response!!');
    next();
}, (req, res, next) => {
    // res.send('4th Response!!');
    next();
}, (req, res, next) => {
    res.send('5th Response!!');
    
});




app.listen(7777, () => {
    console.log('Server is running on port 7777');
})