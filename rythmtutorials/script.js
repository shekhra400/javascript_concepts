//runtime error occurs when browser runs the js code

// SyntaxError - occurs when we make a mistake with our syntax:

// var x = "hello";

// var wrongObj = {
//     name: "foo"
//     missingComma: true
// };
// function makeXOGrid(row, column) {
//     var newArray = Array(Array());
//     var k = true;
//     for (var i = 0; i < row; i++) {
//         for (var j = 0; j < column; j++) {
//             if (k == true) {
//                 newArray[i][j] = 'X';
//             } else {
//                 newArray[i][j] = 'O';
//             }
//             k = !k;
//         }
//     }
//     console.log(newArray);
// }

// var a = makeXOGrid(2,4);
// console.log(a);

/*--------------------------------------------------------------------------------------------*/

//We can also pass functions as parameters! We call functions that accept functions 
//as parameters "higher order functions."

function sendMessage(message,myFunc){
    return myFunc(message); //use return when single value return, in loop dont use return just use myFunc(message);
    // myFunc(message);
}

sendMessage('hello world',console.log);
sendMessage('hello world',alert);
sendMessage('hello world',confirm);

/*--------------------------------------------------------------------------------------------*/

//