# project-2---nodejs-DeVogelRyan

## This project is an API using Node.js and mongoDB.
There are 2 enpoints to start with namely idea and user.
The idea is bassicly an idea for a startup and the user are the users that have and email, username, phonenumber...

### Entities 
ideas,
users


## Endpoints

### Idea:
(Get) localhost:3000/ideas = get all the ideas

(Get) localhost:3000/ideas/:ideaID = get a specific idea with an ID

(Get) localhost:3000/ideas/specific?offset=1&limit=1 = get the ideas with an offset and a limit

(Post) localhost:3000/ideas = post a new idea
![afbeelding](https://user-images.githubusercontent.com/80109984/148687970-75591d27-f347-453a-a145-07aa31f46de4.png)
(This requires the whole body)

(Delete) localhost:3000/ideas/:ideaID = remove a specific idea with an ID

(Put) localhost:3000/ideas/:ideaID = update a specific idea with an ID
![afbeelding](https://user-images.githubusercontent.com/80109984/148688062-5a9be470-3971-4575-b17e-339292a3a7db.png)
(This requires the whole body)

### User:

