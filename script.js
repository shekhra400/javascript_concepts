// javascript bind method of ES5
var user = {
    data        :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    clickHandler:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1;
        // This line is adding a random person from the data array to the text field​
        $("input").val (this.data[randomNum].name + " " + this.data[randomNum].age);
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }
}
$('button').click(user.clickHandler.bind(user));


//---------------------------------------------------------------------------------------

/* javascript currying*/

/* Briefly, currying is a way of constructing functions that allows partial application 
of a function’s arguments. What this means is that you can pass all of the arguments a 
function is expecting and get the result, or pass a subset of those arguments and get a 
function back that’s waiting for the rest of the arguments. It really is that simple. */

/*example 1 with 2 function call*/

function greetCurrying(num1){
    var sum = 0;
    if(arguments.length > 1){
        var args = Array.prototype.slice.call(arguments);
        args.forEach(function(entry) {
            sum += entry;
        });
        console.log(sum);        
    }else{
        sum = num1;
        return function(numX){
            sum += numX;
            console.log(sum);
        }
    }
}

// greetCurrying(2,3);


/*example 2 with strings*/

function showCurrying(firstname){
    return function(lastname){
        console.log(firstname +' '+ lastname);
    }
}

// showCurrying('shekhar')('shukla');

/*-------------------------------------------------------------------------------------*/

/*call vs apply vs bind*/

/*They all attach this into function (or object) and the difference is in the function 
invocation (see below).
*/

//call attaches this into function and executes the function immediately:

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
 
// say.call(person1, 'Hello'); // Hello Jon Kuperman
// say.call(person2, 'Hello'); // Hello Kelly King

//apply is similar to call except that it takes an array-like object instead of listing
// the arguments out one at a time

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
 
// say.apply(person1, ['Hello']); // Hello Jon Kuperman
// say.apply(person2, ['Hello']); // Hello Kelly King


// bind attaches this into function and it needs to be invoked separately like this:

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}
 
var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);
 
// sayHelloJon(); // Hello Jon Kuperman
// sayHelloKelly(); // Hello Kelly King

/*-------------------------------------------------------------------------------------*/

// Javascript objects in details

/*Reference Data Type and Primitive Data Types
One of the main differences between reference data type and primitive data types is 
reference data type’s value is stored as a reference, it is not stored directly on the 
variable, as a value, as the primitive data types are*/
var person = {name: "Kobe"};
var anotherPerson = person;
person.name = "Bryant";
console.log(anotherPerson.name);
console.log(person.name);
    
//Creating Objects
// 1.Object Literals

var mango = {
    color: "yellow",
    shape: "round",
    sweetness: 8,
    howSweetAmI: function () {
        console.log("Hmm Hmm Good");
    }
}
//2.Object constructor

var mango =  new Object ();
mango.color = "yellow";
mango.shape= "round";
mango.sweetness = 8;
mango.howSweetAmI = function () {
// console.log("Hmm Hmm Good");
}

//How to Access Properties on an Object

/* 1.Dot Notation
 object.property;
 */
 /*
2.Bracket Notation
object[property];
 */
var school = {schoolName:"MIT"};
console.log(school.hasOwnProperty("schoolName"));
console.log("toString" in school);

// To check own property use "hasOwnProperty" else for all property use "in"
