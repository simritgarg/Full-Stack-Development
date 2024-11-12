// Form Handling , sessions, cookies


// form Handling : handle backend process of forms and making sure that data coming from any frontend library, framework, 
// templating engines we will still handle at backend

// to install the cookie package
// session-cookie: the code word saved at browser is the cookie and the connectivity of server with the help of cookie is the 
// session as when we want to download the image from the server, the server asked for login and u download the image but 
// after downloadation the website forget about the login details and asked for login when again u want to download the image 
// so for that it gave the password to u so that when ever u want to download the image again u just have to give code word so 
// the code word which is cookie on the browser and the connectivity of server with the cookie is called session

// this means we can keep any data on the browser that is frontend but when u send the request at the backend the saved data 
// will automatically load on that

// so cookie is the data that is saved on the browser so this data is mainly used for authentication means for logging 
// that is to keep the user login

// the term blob is not the correct way but to make for understandable we use term blob
// as when u send the data of form which is in the plain format like name: simrit, email ... etc to the server to store 
// then it is sent not in the plain format but in the form of blob that the unreadable stream
// blob when data is in binary format

// when we write data in frontend it is sent in urlencoded format usually and when u send the data from the json file it is sent 
// it from the json format

const express = require('express'); 
const app = express(); 

// for cookies 
// u send the data in the plain format but the server get or understand the blob so to make the blob again to plain format
// to make it readable for user as a response we write the below code

app.use(express.json()); // make the json data readable
app.use(express.urlencoded({ extended: true })); // to make urlencoded data readable

app.use(function(req,res,next){
    console.log('middleware run');
    next();
});
app.get('/',function(req,res){ 
    res.send("Hello how are you hey there!!");
});
app.get('/about',function(req,res){ 
    res.send("World");               
});
app.get('/profile',function(req,res,next){ 
    return next(new Error("Something went wrong"));          
});
app.use((err,req,res,next) =>{
    console.error(err.stack);
    res.status(500).send('Something Broke!'); 
});
app.listen(3000);



