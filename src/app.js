const express = require('express');
const app = express();

app.use('/test',(req, res)=> {
    res.send('Test Server');
});


app.get('/user/:userId', (req, res) => {
    console.log(req.params);
    res.send({firstName: 'Mahesh', lastName: 'Reddy'});
})

app.get('/user', (req, res) => {
    console.log(req.query)
    res.send({firstName: 'Mahesh', lastName: 'Reddy'});
});

app.post('/user', (req, res) => {
    res.send('User Data Saved Successfully');
})

app.patch('/user', (req, res) => {
    res.send({firstName: 'Mahesh', lastName: 'Reddy', age: 26});
});

app.put('/user', (req, res) => {
    res.send({ age: 26});
});

app.delete('/user', (req, res) => {
    res.send('User Data Deleted Successfully');
})

app.use('/user', (req, res) => {
    res.send('User Server');
});

app.listen(7777, () => {
    console.log('Server is running on port 7777');
})