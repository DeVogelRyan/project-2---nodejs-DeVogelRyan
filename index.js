const express = require("express");
require('dotenv/config')
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
//import router
const IdeaRoute = require('./routes/idea');
const UserRoute = require('./routes/user');
//import db connection
const dbconnection = require('./db/dbconnection');


//setup cors so that other resources can fetch the API
app.use(cors());
//This is so the server knows how to handel json requests.
app.use(bodyparser.json());



app.use('/ideas', IdeaRoute);

app.use('/users', UserRoute);


const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});