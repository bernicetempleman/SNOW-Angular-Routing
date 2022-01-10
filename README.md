# SNOW-Angular-Routing

- In Single Page Applications, only one page is requested from the server, and it provides multiple views dynamically rather than loading the new pages from the server.
- The Router mechanism in Angular provides a way to navigate from one view to another view in the application.

## Router Module
- Angular provides a RouterModule that has the necessary service providers and directives for navigating through application views. 
- The router defines navigation of views on a single page and interprets URL links to determine which views to create or destroy, and which components to load or unload.
- A routing component imports the Router module, and its template contains a RouterOutlet element where it can display views produced by the router.

```
Run the ng new routing-app --routing command to generate a basic Angular app with an app routing module, where we can configure our routes.
To use the Angular router, an app needs to have at least two components so that it can navigate from one to the other. 
Run these command ng g c first and ng g c second to generate 2 components - FirstComponent and SecondComponent.

Make sure that in index.html file we have <base href="/"> in the <head> section. 
The href attribute is set to "/" so that the application constructs the URL while navigating.
We need to import these two components in the app-routing.module.ts file.
```
![image](https://user-images.githubusercontent.com/12488769/148706927-6a4d360d-0a34-4348-9463-377c2e01f1b1.png)

- Also, import the AppRoutingModule into AppModule and add it to the import array. 
- The Angular CLI performs import this by default. 
- When we implement the routing feature in the existing application, we need to import AppRoutingModule into AppModule.
![image](https://user-images.githubusercontent.com/12488769/148706924-3f662d91-4efa-40b4-9985-212a2070a79b.png)

-  In the app routing module, the CLI creates a Routes array used to define our routes
  ![image](https://user-images.githubusercontent.com/12488769/148706949-b939e947-f063-461d-9324-a8a4bfcf2615.png)

## Each route in the Routes array is an object with two properties: 
- path - URL path for the route.
- component - the corresponding angular component for the specified path.
![image](https://user-images.githubusercontent.com/12488769/148706962-9bd630ec-0a66-443e-a0be-ecaaca251e84.png)
```
<router-outlet> - works as a placeholder to load the different components dynamically based on the activated component.
```
- routerLink - is an attribute to an anchor tag which sets the route for the component.
- In the AppComponent, we add our routes to the application. 
- Angular updates the view depending upon the selected route
  
  ![image](https://user-images.githubusercontent.com/12488769/148706982-ce6da758-fddf-4b4c-b091-21e939e7be1f.png)

## Routing Guards
-  Router guards are used to check whether the user should grant or remove access to certain parts of the navigation.
- There are 4 different interfaces act as routing guards:
- CanActivate - decides if the route can be activated.
- CanActivateChild- decides if children of a route can be activated.
- CanLoad- decides if a route can be loaded.
- CanDeactivate- decides if the user can leave a route.
  ```
  Run the ng g guard <guard-name> command in your terminal to generate a guard service. 
When we run the ng g guard admin command, the CLI creates a service class that implements any one of the guard interface
  ```
  ![image](https://user-images.githubusercontent.com/12488769/148707007-6a04816e-5062-407c-8768-52400b3911cd.png)

 - Adminguard is a class that implements the CanActivate interface and overrides the canActivate() method. 
- The canActivate() method uses the following parameters:
- next: ActivatedRouteSnapshot - Contains the information about a route associated with a component loaded in an outlet at a particular moment in time.
```
state: RouterStateSnapshot - Contains the information about router state at a particular moment in time.
In this example, the canActivate() method to only allow access if the user is logged in. 
Here imported the AuthService to get the value of isLoggedIn property which holds true if the user logged in else false.
```

- We apply the guard to the routes, by imposing canActivate property of the path object. 
  admin-routing.module.ts
- we can access the EmployeeListComponent and EmployeeListComponent only if we had logged in.

![image](https://user-images.githubusercontent.com/12488769/148707031-8a972a92-87af-4a66-b0b3-435b3788bcc7.png)

