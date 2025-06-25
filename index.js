const express = require("express");
const app = express()

const port = 5500
students = "/student"

const allStudent = [
    {id:214723, name:'Adekola Israel', Department: "Software Engineer"},
    {id:214323, name:"Bamidele mercy", Department: "Cyber Security"},
    {id:214723, name:'Adekola Israel', Department: "Software Engineer"},
    {id:214323, name:"Bamidele mercy", Department: "Cyber Security"},
    {id:214723, name:'Adekola Israel', Department: "Software Engineer"},
    {id:214323, name:"Bamidele mercy", Department: "Cyber Security"},
    
]

app.get(students,(req,res)=>{
    res.send(allStudent)
})

app.get("/",()=>{
    try {
        res.send("Hello world")
    } catch (error) {
        console.log(error);
    }
})


app.listen(port, ()=>{
    console.log("Hello world");
})