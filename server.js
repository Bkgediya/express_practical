const express = require('express');
const app = express();
const path = require('path');

// middleware to server static files
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

// dynamic params
app.get('/api/products/:id',(req,res)=>{
    res.send(`Hello World ${req.params.id}`)
})

// query params
app.get('/api/products',(req,res)=>{
    res.send(`Hello World ${req.query.name}`)
})

// type of middleware
// 1. application middleware
// 2. error middleware
// 3. router middleware
// 4. built-in middleware
// 5. third party middleware


// Route level middleware example
const logRequest = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// only applied to route /api/users
app.use('/api/users', logRequest);

app.get('/api/users', (req, res) => {
    res.send('User list');
});

app.get('/api/users/:id', logRequest, (req, res) => {
    res.send(`User ${req.params.id}`);
});


app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})