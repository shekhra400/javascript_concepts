//Rithm school javascript course
/*
Callback Functions
To reiterate, a callback function is the function that is being passed to a higher order function
and that callback function will be invoked within the higher order function. In our sendMessage example,
sendMessage is the higher order function and fn is the callback function.
 */

// function add(a,b){
//     return a+b;
// }

// function subtract(a,b){
//     return a-b;
// }

// function math(a,b,callback){
//     console.log(callback(a,b));
// }

// math(4,2,subtract);

//implement jquery each function
// this function should accept 2 parameters, put them in!
// function each(arr){
//     for (var i = 0; i < arr.length; i++) {
//         console.log(i);
//         console.log(arr[i]);        
//     }
// }


// each([1,2,3,4], function(val){
//     console.log(val);
// });
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 3
// 4

// function alert(a) {
//     alert(a);
// }

// function console(a) {
//     console.log(a);
// }

// function call(a,functioncall){
//     functioncall(a);
// }
// var test = {
//     'a':10,
//     'b':20,
//     'c':
// }


//callback functions can be passed as an arguments and should return something

// var aa = map([1,2,3,4],function(val){
//     return val*2;
// });
// console.log(aa);
// function map(arr,fn){
//     for (var i = 0; i < arr.length; i++) {
//         console.log(fn(arr[i]));        
//     }
// }

//SETTIMEOUT & SETINTERVAL
/* settimeout run once/setinterval runs every n sec mentioned in the function
 */

// var timeout = setInterval(function() {
//     console.log('hello world');
//     clearTimeout(timeout);
// }, 1000);
/*
How JS manages asynchronous code
In order to understand how JavaScript manages asynchronous code, we first need to define a few terms:

call stack - where function calls are put (each one is called a "stack frame"). The call stack (sometimes simply referred to as the stack) is a LIFO (last-in-first-out) data structure. You can think of the stack like a stack of cups (last one you put on the stack is the first one that comes off). What that means is that if there is a function on the stack and it is under another function, it can never execute until the function on top has come off the stack (either by returning some value or by executing all the code in the function).

event queue - When an asynchronous event occurs, it gets put into what is called the "event queue" (also known as the queue). It is then moved to the stack when the stack is clear (i.e. when there are no functions on the stack). MDN defines the queue as "a list of messages to be processed. A function is associated with each message. When the stack is empty, a message is taken out of the queue and processed. The processing consists of calling the associated function (and thus creating an initial stack frame). The message processing ends when the stack becomes empty again." The queue is a FIFO data structure (first-in-first-out).

heap - where objects are stored. The heap is an unstructured/unorganized region of memory.

JavaScript internally has something called the "Event Loop", which checks the queue and sees if there are any processes to execute.
 */

/* Closures */

//Closure is when a function is able to access variables from an outer function that has already returned.
function outer(a) {
    return function (b) {
        return a + b;
    }
}

// console.log(outer(5)(2));

/* we can create variable private through closures */
function defineAge() {
    var age = 10;
    return function grow() {
        return age++;
    }
}

var defAge = defineAge();
// console.log(defAge.age);
// console.log(defAge());//10
// console.log(defAge());//11

// The arguments array (well not exactly...)
//Arguments is basically list of parameters passed in the function available as array object

// function abc(){
//     console.log(arguments);//it will print all the arguments passed in the function
// }

// function abc(){
//     var a = function(){
//         console.log('abc');
//     }
//     this.b = function(){
//         return a();
//     }
// }
// var aaaa= new abc();
// aaaa.b();
// var cc = 100;
// console.log(this);
// console.log(this.cc);
// a = (function () {
//     console.log(this);
//     console.log(this.cc);
//     var privatefunction = function () {
//         alert('hello');
//     }
//     return {
//         publicfunction : function () {
//             privatefunction();
//         }
//     }
// })();

// var singleton = (function () {
//     var instance;

//     return function (a) {
//         if (!instance) {
//             this.a = a;
//             instance = this;
//         }
//         return instance;

//     }
// })();

// var obj = singleton('shekhar');
// var obj2 = singleton('shekharssss');
// console.log(obj.a);
// console.log(obj2.a);

// function sum() {
//     if (arguments.length == 2) {
//         return arguments[0] + arguments[1];
//     } else {
//         return (num) => {
//             return num + arguments[0];
//         }
//     }
// }
// console.log((sum(2, 3)));
// console.log((sum(2)(3)));

//countdown

// function countdown(n) {
//     var a = setInterval(function () {
//         if (n > 0) {
//             console.log(n);
//         } else if (n == 0) {
//             clearInterval(a);
//             console.log('done');
//         }
//         n--;
//     }, 1000);

// }
// countdown(5);

function operation(a, b, fn) {
    fn(a, b);
}

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

// operation(5,3,sub);

//DOM
/*
DOM is document consist of html markups arranged in the tree structure.It connects web page with scripts
or programming language

2 methods to access dom elements
document.getelementbyid('currentid');
document.querySelector('#container')//search for whole document
 */

/*
Event contains 2 main elements
e.target
e.preventdefault
EventPropogation
addeventlistener('click',function(){},useCapture=true/false)
if useCapture = false/default then event bubbleing | event bubble from inner to outer
if useCapture = true then event | event bubble from outer to inner
 */
// document.addEventListener('DOMContentLoaded', function () {
//     var container  = document.getElementById('container');
//     container.addEventListener('click', function (e) {
//         console.log(e);
//     })
// })

// $(document).ready(function(){
// console.err
// })

//Jquery selector
/*
class,id,element,property
 */

// $(document).ready(function(){
//     console.log($('.container').html());
//     console.log($('.container').text());
//     console.log($('input.name').val());
// });

//for traversing in nodes we use
/*
find/parent/children/prev/next
 */

/*--------------------------------------------------------------------------------------------------*/
//THIS concept

// 4 ways to bind this
/*
-Default binding | window object without context of any class
-implicit binding-
-explicit binding | call, apply, bind(bind works with closure)
- new binding | The new keyword - when the new keyword is used, the keyword this refers to an object 
that is created from a function after the new keyword (usually called a constructor function).
 */

//default binding
var win = this;
// console.log(win);
function abc() {
    // console.log(this);
}
// var a = new abc();
// a();

//implicit binding
//function with this keyword is part of any object, and according to implicit 
//rule this refers to immidiate parent object

// var obj = {
//     value:'shukla',
//     sayHello: function(){
//         return this.value + ' shekhar';
//     }
// }
// console.log(obj.sayHello());

// var instructor = {
//     firstName: 'Tim',
//     info: {
//         catOwner: true,
//         boatOwner: true,
//         displayLocation: function () {
//             return this.location;
//         },
//         data: {
//             location: "Oakland",
//             displayLocation: function () {
//                 return this.location;
//             },
//             logLocation: function(){
//                 return function(){
//                     return 'closure';
//                 }
//             }
//         }
//     },
// }

// console.log(instructor.info.data.logLocation()());

/*--------------------------------------------------------------------------------------------------*/
//OOPS

/*
encapsulate or grouping of code in the logical group
Implement super in javascript 
*/

// function Vehicle(name,regNumber){
//     this.name = name;
//     this.regNumber = regNumber;
// }

// function Car(name,regNumber,model,type){
//     Vehicle.call(this,name,regNumber);
//     this.type= type;
//     this.model = model;
// }

// var ford = new Car('ford',122131,2017,'diesel');
// console.log(ford);

//Prototype
