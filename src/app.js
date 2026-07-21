const express = require('express');
const {adminAuth, userAuth} = require('./middlewares/auth')
const app = express();

app.use('/admin', adminAuth);

app.get('/user', userAuth,  (req, res) => {
    res.send('User is fetched');
});

app.post('/user/login', (req, res) => {
    res.send('User logged in successfully')
})

app.get('/admin/getAllData', (req, res) => {
    res.send('All data is fetched');
});

app.get('/admin/deleteUser', (req, res) => {
    res.send('User is deleted');
});



app.listen(7777, () => {
    console.log('Server is running on port 7777');
})