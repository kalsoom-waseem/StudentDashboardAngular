const mongoose = require('mongoose');
const Student = mongoose.model('Student',{
   
    student_number: {type:Number},
    student_name: {type:String},
    student_batch: {type:Number},
    birth_date: {type:String},
    department: {type:String},
    mobile: {type:Number},
    email:{type:String},
    password: {type:String}

});
module.exports = Student;