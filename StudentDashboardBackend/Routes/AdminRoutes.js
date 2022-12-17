const express = require('express');
const router =  express. Router();

const mongoType = require('mongoose').Types;
const student = require('../Models/Student');
//post student API
router.post('/student', (req,res)=>{
    let StudentObj= new Student({
    student_number: req.body.student_number,
    student_name: req.body.student_name,
    student_batch: req.body.student_batch,
    birth_date: req.body.birth_date,
    department: req.body.department,
    mobile: req.body.mobile,
    email:req.body.email,
    password: req.body.password
    })
    StudentObj.save((err,doc)=>{
        if(err){
            console.log('Error');
            res.status(400).send('Internal error')

        }else{
            res.send(doc);
        }
    })
})
//get all faculties
router.get('/student',(req,res)=>{
    Student.find((err,doc)=>{
        if(err){
            console.log('Error occured');
            res.status(400).send('Internal error');

        }else{
            res.status(200).send(doc);
        }

    })

})

//update student
router.put('/faculty/:id',(req,res)=>{
    let StudentObj= {
        student_number: req.body.student_number,
        student_name: req.body.student_name,
        student_batch: req.body.student_batch,
        birth_date: req.body.birth_date,
        department: req.body.department,
        mobile: req.body.mobile,
        email:req.body.email,
        password: req.body.password
    }
    if(mongoType.ObjectId.isValid(req.params.id)){
        Student.findByIdandUpdate(req.params.id,{$set : StudentObj},{new: this.true}, (err,doc)=>{
            if(err){
                console.log('Internal error', err);
                res.status(400).send('Internal error', err);
            }
            else{
                res.send(doc);
            }
        })

    }else{
        res.status(400).send('Unable tofind the student')

    }


       

})
//update student
router.delete('/faculty/:id',(req,res)=>{
    if(mongoType.ObjectId.isValid(req.params.id)){
        Student.findByIdandRemove(req.params.id, (err,doc)=>{
            if(err){
                console.log('Internal error', err);
                res.status(400).send('Internal error', err);
            }
            else{
                res.send(doc);
            }
        })

    }else{
        res.status(400).send('Unable tofind the student')

    }


       

})
module.exports = router;