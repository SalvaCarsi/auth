# Auth Api

Micro service that provides authentication for a logged in user by email and password.

Implements: 
- Koa server
- Heroku deployment

TODO:
- Password encoding
- Implement MongoDB
- Use JWT
 
## Installation and running the Api
```
npm install
npm run start
sudo service mongod start
api is available locally at http://localhost:8008/
```

## Deploy
```
heroku login
heroku create my-app-name
git push heroku master
heroku ps:scale web=1
heroku open
```
