const express=require('express');
const app=express()
const cors=require('cors');
app.use(cors());

const users=["sachin", "Gauti", "DK", "russel"];

app.get("/users", (req, res)=>{
    res.send(users);
})

app.listen(3001, ()=>{
    console.log('running');
})