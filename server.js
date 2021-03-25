const express = require('express');
const jokes = require('./jokes');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req , res) => {
    res.status(200).json({
        message: 'Server Started at 3000'
    })
});

app.use('/jokes', jokes.jokesRouter);

app.use('*', (req,res) => {
    res.status(404).json({
        message: 'Route not found'
    })
})

app.listen(port, (err) => {
    if(err){
        console.log(`Error : ${err}`);
    }
    else{
        console.log('Server Started');
    }
})