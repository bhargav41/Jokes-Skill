const express = require('express');

const router = express.Router();

const { db } = require('./db');

router.get('/random', async (req,res) => {
    try{
        const jokes = (await db).collection('jokes').find();
        const jokesList = [];
        await jokes.forEach((joke) => {
            jokesList.push(joke.joke);
        })
        let index = -1;
        while(index == -1){
            let temp = (Math.floor(Math.random()*10));
            if(temp < jokesList.length){
                index = temp;
            }
        }
        res.status(200).json({
            message: 'OK',
            joke: jokesList[index]
        })
    }
    catch(e){
        console.log(`Error : ${e}`)
        res.status(500).json({
            message: 'Error',
            error: e.message
        })
    }
})

module.exports = {
    jokesRouter: router
}