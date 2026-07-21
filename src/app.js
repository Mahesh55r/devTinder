const express = require('express');


const app = express();

app.get('/getUserData', (req, res) => {
    try {
        throw new Error('User not found');
    } catch (err) {
        res.status(500).send('Something went wrong')
    }
})


app.use('/',  (err, req, res, next) => {
    if(err) {
        res.status(500).send('Internal server error');
    }
    res.send('User is fetched');
});




app.listen(7777, () => {
    console.log('Server is running on port 7777');
})