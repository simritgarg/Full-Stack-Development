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
var ans = arr1.find(function(val){
    if(val==59) return val;

})
console.log(ans);
//indexOf


