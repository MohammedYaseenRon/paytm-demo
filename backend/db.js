const mongoose = require("mongoose");


const mongoDBURL = "mongodb+srv://ron:NnoV7TidPQ3SWmWT@cluster0.fsxtjkh.mongodb.net/paytm";

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Could not connect to MongoDB', err);
  });

//create a schema for users
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password: {
        type: String,
        required: true,
        minLength: 6

    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const  accountSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,   // Reference to User model
        ref:'User',
        required:true

    },
    balance: {
        type:Number,
        required:true
    }
});


//model schema
const Account = mongoose.model("Account",accountSchema);
const User = mongoose.model("User",userSchema);

module.exports = {
    User,
    Account,
};
