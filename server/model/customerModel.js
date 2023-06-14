const mongoose=require('mongoose')
const validator = require('validator')

const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"all fields are necessary"],
    },
    email:{
        type:String,
        required:[true,"all fields are necessary"],
        validate:validator.isEmail
    },
    phoneNumber:{
        type:String,
        required:[true,"all fields are necessary"],
        validate:validator.isMobilePhone,
    },
    poojaType:{
        type:String,
        required:[true,"all fields are necessary"],

    },
    date:{
        type:String,
        required:[true,"all fields are necessary"],
        validate:validator.isDate,
    },
    addres:{
        type:String,
        required:[true,"all fields are necessary"],
    }



})

const customerModel=mongoose.model("customer",customerSchema);
module.exports=customerModel