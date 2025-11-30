/* Today Topic Class 01

01----- Fundamental JavaScript Concepts
02----- Arrays and Objects (foreach , map , filter , indexOf)
03----- Function return values
04----- Asynchronous JavaScript with setTimeout


*/

// Start Topic-------------------
// 02------- Arrays and Some imp Functions


arr = [1,2,3,4,5];

arr.forEach(function(val){
    console.log(val + " hello")
})

newArr = arr.map(function(val){
    return 13*2;
})

console.log(newArr);


filterArray = arr.filter(function(val){
    if(val < 3){
        console.log(val + " Vaibhav")
    }
})


findArray = arr.find(function(val){
    if(val === 3){
        console.log(val + " Found Value")
    }else if(val > 5){
        console.log("Not Found")
    }
})


indexArray = arr.indexOf(12); // returns index 2
console.log(indexArray);
arr.indexOf(7); // returns -1 (not found)


// Objects -----------------------

var obj = {
    name : "vaibhav",
    age : 19,
    city : "UP"
}

console.log(obj);

Object.freeze(obj);  // it will not allow to change the object properties


// Async JavaScript 

async function abcd(){
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hello Vaibhav");
}

abcd();