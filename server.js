// function callback(){
//     console.log("this is call back")
// }

// const { json } = require("express")

// var add=(a,b,callback)=>
// {
//     var result=a+b;
//     console.log(result);
//     callback();
// }

// add(2,3,()=>console.log('result is added'))
// callback()

// var fs=require('fs');
// var os=require('os');

// // we can extract info of system like username user id etc
// var user=os.userInfo;

// console.log(user)

// // we want to send greeting message to user 

// fs.appendFile('greeting.txt','hi',()=>
// {
//     console.log('file is created')
// })

// console.log(fs)

// const notes=require('./notes.js')

// console.log('this is notes.js file')


// day 2 json


const jsonstring=`{"name": "raaj", "age":22,"city":"chandausi"}`;
const jsonobject=JSON.parse(jsonstring);
console.log(jsonstring)
console.log(typeof jsonstring)

const object={
    name:"raaj",
    class:"btech"
}

const convertjson=JSON.stringify(object)

console.log(object)




