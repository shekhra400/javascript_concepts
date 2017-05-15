/*Callback vs promise vs observables */

/*
PROMISES

-Promises are bascically syntactical sugar over the callback
-they are composable,which roughly means that combining multiple promises "just works".
-handles the return value with standard method using resolve,reject while callback depends on the 
function being called or whether try catch was well implemented in callbacks or not
-provides functions such as "then",catch,error
-no difference as such with callbck, its just that for numerous call using promise is better approach.
-A Promise handles a single event when an async operation completes or fails.
-promise are non-cancelable

Observable

-An Observable is like a Stream and allows to pass zero or more events where the
 callback is called for each event.
-Often Observable is preferred over Promise because it provides the features of Promise and more.
-it provides functions on data stream, using rxjs we can manupulate data i.e map,filter.
-Observable also has the advantage over Promise to be cancelable. If the result of an HTTP request
 to a server or some other expensive async operation isn't needed anymore, the Subscription of an 
 Observable allows to cancel the subscription, while a Promise will eventually call the success or 
 failed callback even when you don't need the notification or the result it provides anymore.
-Observable provides operators like map, forEach, reduce, ... similar to an array
-There are also powerful operators like retry(), or replay(), ... that are often quite handy.
Promises vs Observables

Promise:
-returns a single value
-not cancellable
Observable
-works with multiple values over time
-cancellable
-supports map, filter, reduce and similar operators
-proposed feature for ES 2016
-use Reactive Extensions (RxJS)
-an array whose items arrive asynchronously over time

*/