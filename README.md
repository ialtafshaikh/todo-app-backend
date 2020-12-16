
# Todo Backend

A Todo backend built using express server, mongoDB atlas is used to store the data and hosted on Heroku.

## Getting Started

[Frontend App of the todo linked with the backend](https://ialtafshaikh.github.io/todo-app-frontend/)

[check the authentication code for the todo](https://github.com/ialtafshaikh/authentication-backend)

### Downloading and Running this Project Locally
1. clone the repository
```
https://github.com/ialtafshaikh/todo-app-backend.git
```
2. add a ``.env`` file inside the root folder
```
DATABASE_URL=your_atlas_db_url
DEBUG=true // set true to use local db and false to use atlas
PORT=3000
```

### Supported Routes

```
/signup : (method:post) - create your accout
/login : (method:post) - get jwt token and authenticate yourself using the creds (email,password)
/todos : (method:get) - to get all user related tasks
/todos : (method:post) - to create task
/todos?description&status - query this endpoint to get all the property based task of the current logged in user
/todos/id : (method:get) - to get a single task of currently logged in user using _id (mongoose id)
/todos/id : (method:put) - to update the status of the task of currently logged in user using _id (mongoose id)
/todos/id : (method:delete) - to delete a given task of currently logged in user using _id (mongoose id)
/auth : to restrict the user from accessing the resources on route /todos
```
Note:

0. **Make sure you have internet connection to connect with the auth backend**
1. while signup send object in this format
```
{
"email":"altafshaikh@cs.com", // unique email
"password":"R#1aasdf", // atleast one cap, one lower, sepcail symbol and total length should be 8 digits
"confirmPassword":"R#1aasdf",
"firstName":"altaf",
"lastName":"shaikh",
"username":"altafshaikh123" // unique username
}
```
2. login object and send the jwt auth token into the authorization header
```
{
"email":"altafshaikh@cs.com",
"password":"R#1aasdf"
}
```
3. create a task require the property ``description``
```
{
"description":  "complete todo backend"
}
```


## Live Demo of this Project
[hosted backend](https://todo-rest-api-backend.herokuapp.com/)

## Proposed Microservice Architecture

### Using Heroku 
![heroku microservice archetecture](https://github.com/ialtafshaikh/static-files/raw/master/microservice/todo-microservice-node.png)

### Using Docker
![docker microservice archetecture](https://github.com/ialtafshaikh/static-files/raw/master/microservice/todo-microservice-node-docker.png)

## Author

* **Altaf Shaikh** - *work by* - [ialtafshaikh](https://github.com/ialtafshaikh)

![altaf shaikh](https://raw.githubusercontent.com/ialtafshaikh/static-files/master/coollogo_com-327551664.png)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
