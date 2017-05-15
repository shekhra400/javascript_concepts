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