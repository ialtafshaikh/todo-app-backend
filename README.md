
# Todo Backend

A Todo backend built using express server, mongoDB atlas is used to store the data and hosted on Heroku.

## Getting Started
- [Check the frontend app of the todo](https://github.com/ialtafshaikh/todo-app-frontend)
- [Check the authentication backend code](https://github.com/ialtafshaikh/authentication-backend)

## Features

- get all todos related to authenticated user
- create todo and store in the mongoDb
- update todo status using todo ID
- delete todo using todo ID

## Additional Features

- authentication is done by the auth server and communication is done using axios api calls
- hosted on Heroku platform
- created docker image 
- microservice architecture propsed
- used mongoDb cloud to store todo data


### Downloading and Running this Project Locally
1. clone the repository
```
https://github.com/ialtafshaikh/todo-app-backend.git
```
2. add a ``.env`` file inside the root folder
```
DATABASE_URL=your_atlas_db_url(keep this empty is ur not provoding any url)
LOCAL_DB_URL=your local mongo url
DEBUG=true // set true to use local db and false to use atlas
PORT=3000
```
Sample for local
```
DATABASE_URL=
LOCAL_DB_URL=mongodb://127.0.0.1:27017/todoapp
DEBUG=true
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

## Deployment

To Host the Project I had used Heroku Platform. To learn more [refer this gist](https://gist.github.com/ialtafshaikh/8336df5d417109b12c46bd20ccda4e17)

## References

- [mongoose quick start](https://mongoosejs.com/docs/index.html)
- [mongoDB documentation reference](https://docs.mongodb.com/manual/introduction/)
- [uniquid to generate unique ids](https://www.npmjs.com/package/uniqid)
- [npm express](https://www.npmjs.com/package/express)
- [axios to make api calls](https://www.npmjs.com/package/axios)
- [CORS module to talk between cross-origin resources](https://www.npmjs.com/package/cors)
- [getting started with docker](https://docs.docker.com/get-started/)
- [middlewares in nodejs](https://medium.com/@selvaganesh93/how-node-js-middleware-works-d8e02a936113)
- [building microservices using nodeJS](https://www.youtube.com/playlist?list=PLIGDNOJWiL182j1bD_nQm-SxARR5s977O)
- [Understanding Microservices Patterns](https://www.youtube.com/playlist?list=PLIGDNOJWiL1_-i0DjC69qr4gRUOkpTvRQ)

## Author

* **Altaf Shaikh** - *work by* - [ialtafshaikh](https://github.com/ialtafshaikh)

![altaf shaikh](https://raw.githubusercontent.com/ialtafshaikh/static-files/master/coollogo_com-327551664.png)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
