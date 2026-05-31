//core modules
const http=require('http');
const express=require('express');
const bodyparser=require('body-parser');
require('dotenv').config();


const app=express();
const server=http.createServer(app);
    server.listen(3052,()=>{
    console.log('server running at http://localhost:3052/');
    })

//body parser used// lekin isko express.urlencoded({extended:true}) se  replace karna hai
app.use(bodyparser.urlencoded({extended:true}));

app.use((req,res,next)=>{
    res.statusCode=404;
    res.send("HEllo")
})