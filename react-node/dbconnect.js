const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/reactnode', function(err){
    if(err){
        throw err;
    }
    console.log("Database connected");
});