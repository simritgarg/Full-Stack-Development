// nodejs is not a programming language , not a library, not a framework, not a technology then what is nodejs
// nodejs is the runtime environment
// we will write the code in js then pass it to the wrapper class which will the convert the js code to cpp which will pass it to 
// v8 engine which whose source code is written in the cpp as with the cpp module we will help to create the server (ie it will 
// take the js module and then with help of engine v8 cpp module it will use to create the server)
// so node js is the js wrapper + v8 engine

// nodejs is the js runtime environment as js is not capable to make the backend so there introduce the nodejs to make the 
// backend with javascript

// npm is basically the module where we can take the code without writing it again


// callback is basically function

// const fs = require('fs');

// writefile 
// fs.writeFile("textfile.txt", "Hello, hey how are u" ,function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })


// copyfile
// fs.copyFile("Greetingfile", "./01_basics/Greetingfile2.txt" ,function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })


// appendfile
// fs.appendFile("textfile.txt", "Hello, hey how are u. Hope you are doing well!" ,function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })


// rename
// fs.rename("textfile.txt", "Greetingfile" ,function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })


// unlink : is to delete the file
// fs.unlink("./01_basics/Greetingfile2.txt" ,function(err){
//         if(err) console.error(err);
//         else console.log("removed");
// })

// rmdir: as this will remove the folder but only if thereis no file in the folder ie is the folder is empty
// fs.rmdir("./01_basics/Greetingfile2.txt" ,function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })
// to remove the folder with the file in it then use the recursive function
// fs.rmdir("./01_basics/Greetingfile2.txt",{recursive:true},function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// -------------------------------------------------------------------------------------------------------------------------
// protocols are the rules that pre-installed in the operating system of internet which one has to follow
// similarly https and http is also the porotocols

// http protocol is that rule through which we are able to request or get something from the internet through this we 
// are watching the video
// http is use to create the server

// const http = require('http');
// const server = http.createServer(function(req,res){
//     res.end("Hello World");
// })
// server.listen(3000);


// ------------------------------------------------------------------------------------------------------------------------------
// NPM: it is basically the package where u will get node related every package but now npm has not only node related packages but 
// also has other topic packages also so earlier npm was node package manager but now npm has no fullform

// which is pre installed in the node js core it is called the module and which we download from the npm it is called the package

// to install  and uninstall npm
// nmp install packageName or npm i packageName
// npm uninstall packageName
// npm i packageName@version    --> installing particular version
// npm i express

// when u install the packages u will see the node modules folder build up as it fill hqave all the modules u will install which
// will be related to the installed package due to the dependencies of required package with the other packages so this is called
// the concept dependencies
// DevDependencies is the packages which will be used only in the development and when when our app will be ready and deployed it
// at that time we will not be using these packages

// example of deDependencies:
//npm i nodemon --save-dev     -> so now till we are doing the development it will be used then after development it will not used 

// npm start and npm test is used when we install node and npm: as they used for pre defined
// npm run dev : it is used for new ones