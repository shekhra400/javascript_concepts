/* 
A few reasons:

1. Performance: it's possible for the client to call the data backends directly, but as the data may be spread out across many such services (e.g. one service for profile data, another for company data, another for jobs data, etc), this would require many requests. Extra roundtrips from the client are very expensive, especially on mobile, so getting all of your data in a single request is much more performant. This is why node.js is a good choice for such a server: non-blocking I/O is performant for fanning out requests to many other services.

2. Reuse: there are many different clients these days, including desktop, mobile web, phone apps, tablet apps, Android, iOS, Windows Phone, etc. If the clients called all the data backends directly, we'd have to implement the same assembly graph in each one. Instead, each client calls the same set of node.js endpoints and gets (more or less) the same JSON payload back.

3. Security: the node.js service can be a central place to check authentication, CSRF, and business logic (ie, is the user allowed to see/modify certain types of data). You obviously can't trust the client to do these checks.

4. UI logic: data backends typically serve up raw data that may need to be decorated for presentation. For example, i18n, number/date/currency formatting, and URLs can all be handled at the node.js layer and should not be in the data backend layer.
*/