const express = require("express");
const mongoose = require("mongoose");
require('dotenv/config')
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

//import router
const PostRoute = require('./routes/posts');

app.use('/posts', PostRoute);

mongoose.connect((process.env.DB_CONNECTION), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connected to db'));



const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});