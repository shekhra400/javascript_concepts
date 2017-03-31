'use strict';
// OBJECT & PROTOTYPES

/*
Display function is used to correct show the object data and type on page.
 */

/*
Another way to create a object is use new keyword
-Using new keyword create the current object and "this" refers to current object.
-by default "this" refers to global object but by using new keyword we are assigning this
to current object. 
-Here function behaves like a class from which we can create object cat
 */

// function Cat(name,color){
//     this.name = name;
//     this.color = color;
// }

// var obj = new Cat('Fluffy','white');
// display(obj);

/*
Another way is to use object.create function which create and set prototype as well
-Here {shekhar:'shukla'} object becomes prototype of cat object
 */

// var cat = Object.create({shekhar:'shukla'},
//     {
//         name:{
//             value:'Fluffy',
//             enumerable:true,
//             writable:true,
//             configurable:true
//         },
//         color:{
//             value:'white',
//             enumerable:true,
//             writable:true,
//             configurable:true
//         }
//     }
// )

// console.log(cat);

/*
There are 4 ways to create object
1-Object literals // {a: 'data'}
2-Object.create
3-using function and new keyword or called as constructor method // a = new Cat();
4- using ES6 class
 */


//OBJECT PROPERTIES

/*
Each object has a property and its property descriptor
 */

// var cat = {
//     name: 'Fluffy',
//     color: 'white'
// }

// display(Object.getOwnPropertyDescriptor(cat,'name'))

/*
WRITABLE- if set to false, one can't change it value but able to change its child property
var a = {name:{
    value:{firstname:'shekhar,lastname:'shukla'}
    writable: false
}

then 
a.name = 'tanoy';//this will throw an error that its not writable
a.name.firstname = 'tanoy'// this will work as its child is writable
}}

ENUMERABLE- if set to false, object inside the json will not be included
var a = {
    name:{firstname:'shekhar,lastname:'shukla'},
    color:'white',
}

if we set the property enumerable to false
Object.defineProperty(a,'name',{enumerable:false})

object attr "name" will not be shown in for in loop 
Secondly not included in the json.stringify

CONfIGURABLE-  it prevent attr to be configured or deleted and also you "can" change 
its writable & but not enumerable property.

delete cat.name//cant works with configurable set to false
 */


//PROTOTYPES

/*
Suppose we want to add "last" property to an array then-
 */
var arr1 = [1,2,3,4];
// Object.defineProperty(arr1,'last',{get:function(){
//     return this[this.length-1];
// }});

/*
But the above function will add last attr to arr1.So what if we want arr2 should also 
have last property.In that case we need prototype.We are going to create property on the parent
prototype which will be accessible to all the array elements
 */
// Object.defineProperty(Array.prototype,'last',{
//     get: function(){
//         return this[this.length-1];
//     }
// });

// So now arr2 will also fetch attr "last" of its own

var arr2 = [4,5,6,7];
// display(arr1.last);

/*
Prototype is a object which exist on every function on javascript
We can say,Object do not have prototype property, they have __proto__ property.
 */
var func1 = function(){
    return 1;
}
// console.log(func1.prototype);

/*
A function's prototype is the object instance that will become prototype for all object created 
using this function as a constructor.

An Object's prototype is an object instance from which the object is inherited.
 */

// function Cat(name,color){
//     this.name = name;
//     this.color = color;
// }

// var Fluffy = new Cat('Fluffy','white');
// display(Fluffy.__proto__ == Cat.prototype);//true
// Cat.prototype.age = 3;
// display(Fluffy.age);//3
// //create another object
// var muffin = new Cat('muffin','black');
// display(muffin.age);//3

/*
hasOwnProperty is used to check object's own property not from prototype

We can assign directly an object to prototype of a function that will change the prototype of 
a function
Cat.prototype = {age:2}
__proto__ property above the highest level will be null(above core Object)
 */

/*
create your own prototypal chain
 */

function Animal(){

}

Animal.prototype.speak = function(){
    return 'grunt';
}
function Cat(name,color){
    this.name = name;
    this.color = color;
}
Cat.prototype = Object.create(Animal.prototype);/* we didn't used new keyword here bcoz we dont
want to call Animal function we just want to set Animal as prototype */

var Fluffy = new Cat('Fluffy','white');
display(Fluffy.speak());//grunt