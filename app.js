//Required
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

//Middleware
app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/posts');
const Post = require('./models/Post');

//Middleware
app.use('/posts', postRoute);

//Routes(/)
app.get('', (req, res) => {
    res.send("we are on home")
});

app.get('/posts', (req, res) => {
    Post.find({}, (err, found) => {
        if (!err) {
            res.send(found);
        }
        console.log(err);
        res.send("Some err occured!")
    })
})

//DB Connection
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to DB")
});


app.listen(3000);