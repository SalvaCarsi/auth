const Koa = require('koa');
const _ = require('koa-route');
const mongoose = require('mongoose');


const usersController = require('./controller/users');

const app = new Koa();

const routes = {
  index: (ctx) => {
    console.log('Koa hitting index route');
    ctx.body = { token: 'fake-token' };
  },
  users: (ctx) => {
    console.log('Retrieving all the users');
    ctx.body = usersController.findAllUsers(ctx);
  }
};

app.use(_.get('/', routes.index));
app.use(_.get('/users', routes.users));

mongoose.connect('mongodb://localhost/users', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(process.env.PORT || 8008);
  console.log('Koa listening on port 8008');
});