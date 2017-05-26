/*
Angular2 concepts
 */

//SERVER SIDE RENDERING

/*
Frontend application using frameworks have virtual dom.When you hard refresh the page behaviour is 
wierd.Only html content is served on pages sometimes with full application load.Which is a problem 
for web crawlers.End user will not face the problem but crawlers do.
Sometimes this happens
{{title}}
{{description}}

The Universal idea is to build an app that does not just render to server but also runs on the server.
 Running in the sense that our state, content and styles are intact on the client and the server as 
 well.In Angular 2, this is achieved with the help of Angular Universal.

 -it is seo friendly
 -Social media friendly
 -prerendered content, state and events
 */
/*
How it works-
When angular Universal runs and bootstrap the application-
-Bootstrapping Universal apps are done with a different library and in two different files 
(client.ts & server.ts). 
-Use of platformUniversalLibrary instead of platformBrowserDynamic to bootstrap
-We have to import UniversalModule also in app.module to make it work
-import main module of angular2 in server.js

And finally when you open your application you can see full html,instead of <app></app>
Thats really great to see in angular part.
*/
/*----------------------------------------------------------------------------------------------- */

 /*
 Subject/Behavior Subject

-It is a observer in addition to being a observable so you can also send values to a subject in 
addition to subscribing to it.
a Behavior Subject is a value that can change over time (can be subscribed to and subscribers can
receive updated results)
-behavior subject need initial value as it return some value
-Upon subscription it returns the last value of the subject. A regular observable only triggers
when it receives a onnext

// Behavior Subject

// a is a initial value. if there is a subscription 
// after this, it would get "a" value immediately
let bSubject = new BehaviorSubject("a"); 

bSubject.next("b");

bSubject.subscribe((value) => {
console.log("Subscription got", value); // Subscription got b, 
                                        // ^ This would not happen 
                                        // for a generic observable 
                                        // or generic subject by default
});

bSubject.next("c"); // Subscription got c
bSubject.next("d"); // Subscription got d
 */

/*----------------------------------------------------------------------------------------------- */

//Observables
/*
Observables follow the Observer pattern, where a single piece of state (the Observable) is watched by
one or more Observers which can react as it changes over time.
-it comes under reactive programming (publish/subscribe).
-
 */



/*----------------------------------------------------------------------------------------------- */

/*AOT*/

/*
JIT-javascript code gets compiled on a fly and convert to binary which browser understand when your
application reads.Hence it take a teany tiny time for compilation.javascript got converted into binary
 and interpreted by browser.
-Also the problem is angular2 compiler is half the size of angular package, so if we reduce it can 
shorten half the payload size.
 */




/*----------------------------------------------------------------------------------------------- */

/* @inject vs @injectable
@injectables are classes with decorator to make it service and injectabe

example-
providers: [
  AuthService,
  { provide: Http, useValue: new CustomHttpImpl() }
]

-with only 1 param AuthService is token as well as class type but with CustomHttpImpl scenario is 
diff. where CustomHttpImpl is injectable service class and Http is token.

-this will actually be the CustomHttpImpl, not Angular's Http
constructor(private http: Http)

-error: No provider for CustomHttpImpl
constructor(private http: CustomHttpImpl)

But in case of primitive type like array string we have to use opaque token/injection token

import { InjectionToken } from '@angular/core';

let numbers = [ 1, 2, 3, 4 ];
let config = '{ "some": "json", "config": "data" }'

const NUMBERS = new InjectionToken('app.numbers');
const CONFIG = new InjectionToken('app.config');


*/



/*----------------------------------------------------------------------------------------------- */







/*----------------------------------------------------------------------------------------------- */