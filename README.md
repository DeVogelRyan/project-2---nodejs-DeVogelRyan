# project-2---nodejs-DeVogelRyan

## This project is an API using Node.js and mongoDB.
There are 2 enpoints to start with namely idea and user.
The idea is bassicly an idea for a startup and the user are the users that have and email, username, phonenumber...

### Entities 
ideas,
users


## Endpoints

### Idea:
* (Get) localhost:3000/ideas = get all the ideas

* (Get) localhost:3000/ideas/:ideaID = get a specific idea with an ID

* (Get) localhost:3000/ideas/specific?offset=1&limit=1 = get the ideas with an offset and a limit

* (Post) localhost:3000/ideas = post a new idea
![afbeelding](https://user-images.githubusercontent.com/80109984/148687970-75591d27-f347-453a-a145-07aa31f46de4.png)

(This requires the whole body - made in postman)


* (Delete) localhost:3000/ideas/:ideaID = remove a specific idea with an ID


* (Put) localhost:3000/ideas/:ideaID = update a specific idea with an ID
![afbeelding](https://user-images.githubusercontent.com/80109984/148688062-5a9be470-3971-4575-b17e-339292a3a7db.png)

(This requires the whole body - made in postman)


### User:
* (Get) localhost:3000/users = get all the users

* (Get) localhost:3000/users/email?UserEmail=test = get a user by email

* (Get) localhost:3000/users/:UserID = get a user by id

* (Get) localhost:3000/users/sorted = get all the users but they are sorted by username

* (Post) localhost:3000/users = post a new user

![afbeelding](https://user-images.githubusercontent.com/80109984/148688345-546b96cd-2dd4-4c06-bc7d-c408991fa663.png)

(This requires the whole body - made in postman)


* (Delete) localhost:3000/users/:UserID = remove a specific user with an ID

* (Put) localhost:3000/users/:UserID = update a specific user with an ID
![afbeelding](https://user-images.githubusercontent.com/80109984/148688559-ababf219-a639-4d48-9f0d-daa05a392b4f.png)

(This requires the whole body - made in postman)


## Sources:
* https://www.w3resource.com/mongodb/mongodb-skip-limit.php
* 




