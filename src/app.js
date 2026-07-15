const express = require('express');
const app = express();

app.use('/test',(req, res)=> {
    res.send('Test Server');
});

app.use('/',(req, res)=> {
    res.send('Hello From Server');
});

app.listen(7777, () => {
    console.log('Server is running on port 7777');
})