// express is the npm package it manages everything from receiving the request and sending the response
// framework -> it gives the flow in which we have write in sequence but we can write some extra independencies in the flow

//app.get(route,requestHandler)            -> requestHandler is the middleware
const express = require('express'); // it means eavery package from express will be stored in the express named variable
const app = express(); // and we have created that variable function and stored in the app named variable
// to create the middleware before going to router
app.use(function(req,res,next){
    console.log('middleware run');
    next();
});
app.get('/',function(req,res){ // .get is use to create the route means get is used to for konse page pe kya dekhega
    res.send("Hello how are you hey there!!");
});
// app.get('/profile',function(req,res){ // .get is use to create the route means get is used to for konse page pe kya dekhega
//     res.send("World");               //alag alag routes pe we can decide what to show
// });
app.get('/profile',function(req,res,next){ 
    return next(new Error("Something went wrong"));           // on backend
});
// for exception handling
app.use((err,req,res,next) =>{
    console.error(err.stack);
    res.status(500).send('Something Broke!');  // on frontend
});
app.listen(3000);
// we have to restart the server to see the change 
// so to automatically restart the route we will install npm i nodemon -g 
// u just has write nodemon filename 

// youtube.com/profile  so here youtube.com is the domain and (/profile) or (/)  is the route