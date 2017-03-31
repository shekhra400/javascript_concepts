// prototypes examples

var a = {
    "name": "shekhar"
};

// console.log(a.foo()); //you cant access this object because it does not exist in current object as well as parent prototype object.
// console.log(a.toString());//you can access this object because it does not exist in current object but exists in parent prototype object.

// console.log(a.__proto__);

/*--------------------------------------------------------------------------------------------- */

/* we can create object with Object.create(customPrototype) 
__proto__ is a chain in which we can mention our own prototype but the first level 
or the top level prototype will always be javascript object prototype which contain tostring func
It is basically a chaining of heirarchy which includes Object as first parent.
Object.prototype will always be equals to currentObject __proto__ with level 1
*/

var customPrototype = {"name":"tanoy"};

var myObj = Object.create(customPrototype);
// console.log(myObj);
// console.log(myObj.__proto__.__proto__ == Object.prototype);

/*--------------------------------------------------------------------------------------------- */

/* Object.defineProperty() This function is being used to assign property in strict mode  */

var task = {};
Object.defineProperty(task,'isDone',{
    value:"get the task done",
    writable:true, //used to give permission to edit the field but one can change its child object data.
    enumerable:true, //able to be counted by one-to-one correspondence with the set of all positive integers.
    configurable:true //able to configure property again by calling defineProperty
});

// console.log(task.isDone);

/*--------------------------------------------------------------------------------------------- */

// FUNCTIONS

/* constructors are basically functions starting with caps (just a standard approach) */
 var Employee = function(name){
     this.name = name
 }

 var currentEmp1 = new Employee('tanoy');
 var currentEmp2 = new Employee('shekhar');
//  console.log(currentEmp.name);
//  console.log(currentEmp1.__proto__ === currentEmp2.__proto__);
//  console.log(currentEmp1 === currentEmp2);
// console.log(currentEmp1);

/* creating function(property) in constructor and access anywhere */
 var Customer = function(name){
     this.name = name;
     this.todo = function(){
        //  console.log('my todos');
     }
 }

 var currentCustomer1 = new Customer('shekhar');
 var currentCustomer2 = new Customer('shashwat');

//  console.log(currentCustomer1.todo == currentCustomer2.todo);
//  console.log(Object.prototype == currentCustomer1.prototype); //returns false
//  console.log(currentCustomer2);

/* For n number of objects todo method exist for each of them irrespective of the requirement 
of the object.For this issue we are going to use prototype to create function in the prototype
and it only exists once in the prototype (__proto__) and can be used in all the instances
Putting function in prototype mean making it __proto__ and Object __proto__ becomes parent of that.
 */

var Customer = function(name){
     this.name = name;
 }
 Customer.prototype.todo = function(){
     console.log(this.name);
 }


 var currentCustomer1 = new Customer('shekhar');
 var currentCustomer2 = new Customer('shashwat');
//  currentCustomer1.todo();//this always point to current object i.e. currentCustomer1
//  currentCustomer2.todo();

/*--------------------------------------------------------------------------------------------- */

//THIS

/* 
This always points to current object.
Globally this is windows object.
 */

// console.log(this=== window);//prints true

var updateSalary = function(){
    console.log(this=== window);
}

// updateSalary(); //prints true because there is no object for this

/* Using THIS in the object */

var obj = {
    name: "shekhar",
    work: function(){
        fn = function(){
            console.log(this);
        }
        fn();
    }
}
// obj.work();

/*------------------------------------------------------------------------------------------ */

/* CLOSURES */

/*
closure is a function which reside inside another function and can use variable of its parent &
global variable.It can be passed as an argument,to be returned as a function result 
 */

var Outer = function(name){
    var fullName = name + " shukla";
    var closureExm = function(){
        console.log(fullName)
    }
    return closureExm;
}
var closureFunc = Outer('shekhar');
// closureFunc();

/*------------------------------------------------------------------------------------------ */

//BOM(browser object model) & DOM(document object model)

// window is a dom object which is a gloal variable used in the js


// set time out examples

setTimeout(function() {
    // console.log("b--" + new Date().getSeconds());
}, 0);
// console.log("a--" + new Date().getSeconds());


/*------------------------------------------------------------------------------------------ */

// Access document (html)

// from document object we can access all the doc nodes
// document.getElementById('id');

//Query selector
// document.querySelector('.class #id') will give you full element


/*------------------------------------------------------------------------------------------ */

// EVENTS

// Event in javascript are fired of with some kind of user interaction such as click,hover,etc

// Event contains-
// 1)Event objects
// 2)Event handlers
// 3)Event listners
// 4)Event bubbling

// Window events
// -load,unload,select(select text),abort,scroll,resize,error.

// Mouse and mouse wheel events
// click,dbclick,mousedown,onmouseenter,onmouseleave,onmouseout,onmousemove,onmouseup,onmouseover

/*------------------------------------------------------------------------------------------ */

// Global functions

// parseInt,parseFloat,isFinite,isNaN,encodeUri,decodeUri,eval

// parseInt('a1212');shows NaN
// parseInt('12a12');shows 12

/*------------------------------------------------------------------------------------------ */

// Error handling

function checkError() {
    try{
        // console.log(aasas);
        throw new Error('bhak chutie');
    } catch(e){
        console.log('error catch');
        console.log(e.message);
    } finally{
        console.log('finally');
    }
}

checkError();

/*------------------------------------------------------------------------------------------ */

// Promises & observables
/* Promises are functions which return some value in the future and help us to make asyncronous 
programmings syncronous
*/

/*------------------------------------------------------------------------------------------ */

// Jslint & jshint
// linter are very useful in evaluating source code and looking for errors,available in ide's'



























