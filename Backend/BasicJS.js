// ARRAYS

// in the javascript we create an array and add the values in any form 
// it can be in int, object, function, boolean value, an another array,string

// var arr = [1,2,4,5,function(){},[],true,{},"HELLO"];

//forEach : when we have to perform a function for each ele of an array

// var arr1 = [1,3,5,7]

// arr1.forEach(function(val){
//     // console.log(val + 2);
//     console.log(val + " Hello");

// })


// var arr1 = [1,3,5,7]

//map: to create the array from the given array
// var newArr = arr1.map(function(val){
//     return val;

// })
// console.log(newArr);


// var arr1 = [1,3,5,7]
//filter: true or false according to the condition
// var ans = arr1.filter(function(val){
//     if(val>3) return true;
//     else return false;

// })
// console.log(ans);


//find 
var arr1 = [1,3,5,7]
// var ans = arr1.find(function(val){
//     if(val==59) return val;

// })
// console.log(ans);

//indexOf
// console.log(arr1.indexOf(5));
//length
// console.log(arr1.length);





//-------------------------------------------------------------------------------------------------------------------------------

// OBJECTS
// OBJECT code is wrote in {} these brackets in the form of (key : values) pairs 

//basics
// {
//     name: "Simrit Garg"
//     age: 20
// }


// var obj = {
//     name: "Simrit Garg",
//     age : 20
// }
// // to access the object variable
// console.log(obj.name); // or
// obj.name = "Simrit";
// console.log(obj['name']);
// console.log(obj.age);

// Object.freeze(obj);
// console.log(obj.name);
// obj.name = "Simriiiit";
// console.log(obj['name']); // will not change the name from simrit to simriiiit as i have freeze it

//-------------------------------------------------------------------------------------------------------------------------------

// FUNCTIONS
// to get the length of function: as the number of parameters passed in the function is called the length of function because functions are the objects

// function abcd(){
//     return 12;
// }
// console.log(abcd());

//-------------------------------------------------------------------------------------------------------------------------------

// ASYNCHRONOUS Js

// this below code will not run
// var a = await fetch(`..api url..`);
// var res = await a.json();
// console.log(res);

// when the code is run line by line then it is synchronous 
// when the code is in asynch. nature then send it to side stack and run the code which is of synch. nature
// when the complete synch. code runs then check whether the asynch code get completes or not if it gets complete bring it to the main stack and run it

// as synch block code are directly send it to main stck but asych block code are send to the side stack and then bring to main stack

// for asynch block of code it is important to write async before the function and write await in the function

async function abcd(){
    var blob = await fetch(` https://randomuser.me/api/ `)
    var res = await blob.json();
    console.log(res.results[0]);
}
abcd();

// it is important to write async as sometimes fetching takes more time to run so to code dont have to wait to long it is wrote
// in the async block





