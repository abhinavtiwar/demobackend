const mongoose = require("mongoose");
const db_name2 = "demoapp";
const dbUrl=`mongodb+srv://Abhinav:8052339892@cluster0.9sram.mongodb.net/${db_name2}?retryWrites=true&w=majority`;
// asynchrounous function

mongoose.connect(dbUrl)
.then((result) => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error(err);
});
module.exports = mongoose;

// to connect to server- node <filename>