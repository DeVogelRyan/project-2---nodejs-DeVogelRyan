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

(Get) localhost:3000/ideas/specific?offset=1&limit=1 = get the ideas with an offset and a limit

(Get) localhost:3000/ideas/:ideaID = get a specific idea with an ID

(Post) localhost:3000/ideas = post a new idea


### User:

