# Modern Angular Bootcamp 

[Link to Udemy page](https://www.udemy.com/course-dashboard-redirect/?course_id=2685124)

### Section 2 : Simple Password generating app
- Topic: **Template Syntax** 
	- Basic overview and use of different types of syntax used in template. Syntax for: event binding, property binding, interpolation 
- Style framework: [Bulma](https://bulma.io/)

### Section 3: Card app 
- Topic: **Components** 
	- Creating reusable components to avoid repetition of HTML in templates 
- Small app showing cards with images saved in assets dir. Generation of components and displaying a list of cards from an array of entries
- Style framework: [Bulma](https://bulma.io/)

### Section 5 : Password generating app 
- Topic: **Pipes** 
	- Using pipes to transform text, using both the built in ones and creating a custom pipe
- Style framework: [Bootstrap](https://getbootstrap.com/)

### Section 6: Gallery app
- Topic: **Directives** 
	- Using directives, built in (ngFor, ngClass, ngIf, multiple directives w/ng-container) and creating custom directives to create pagination 
		- Created custom *attribute directive* to replace the ngClass 
		- Created custom *structural directive* to accept input n, and duplicate whatever was inside the element n times. Used to replace ngFor call in the gallery app to display the images. 
- Style framework: [Bootstrap](https://getbootstrap.com/)

### Section 7 - Section 11: Components Showcase App
- Topic: **Modules**
- Style framework: [Semantic-Ui](https://semantic-ui.com/)
	- Specifically used as semantic-ui contains semantic css and semantic js
	- So we will have access to the styling, but implement the functionality of different modules ourselves via angular based on the documentation.
- Begin to use Angular's routing to navigate 

### Section 8: Typescript Overview
- No associated project, an overview of typescript

### Section 13 - Section 14: : Wikipedia Searching Tool App 
- Topic: **Handling Data and HTTP Requests**
	- Making HTTP Requests, Creation of services, Dependency Injection, Security and avoid XSS attacks
- Will fetch data from the wikipedia API and beginning to touch upon angular app security 
- We used Wikipedia's API to build an app that accepts a keyword to search and then displays a list of the pages found with some metadata about the returned articles 
- Style framework: [Bulma](https://bulma.io/)

### Section 15 - Section 16: RxJS 
- Topic: **Intro to RxJS outside of angular context**
- Updated Wikipedia app from previous sections to use RxJS and use operators on an observable returned by HTTP request. 

### Section 17: Photo Fetching App (handling all requests with RsJX)
- Topic: **Using RsJX and Angular to Handle HTTP Requests**
- Create a very simple app consisting of a component and a service. The component will contain a button 'get image' and when pushed, will make an HTTP request to Unsplash's API to get a random image that will be displayed to the user.


### Section 18: Credit Card Payment App 
- Topic: **Reactive Forms**
	- Creation and handling of forms - validation, messaging
	- Reactive (ReactiveFormsModule) and Template (FormsModule) Forms
- Style framework: [Bulma](https://bulma.io/)