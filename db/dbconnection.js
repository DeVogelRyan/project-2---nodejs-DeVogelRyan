const mongoose = require("mongoose");

mongoose.connect((process.env.DB_CONNECTION), {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
() => console.log('Connected to db'));

exports.module = mongoose;