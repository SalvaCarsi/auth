const Koa = require('koa');
const _ = require('koa-route');

const app = new Koa();

const routes = {
  index: (ctx) => {
    ctx.body = '<h1>The server is up and running!</h1>';
  }
};

app.use(_.get('/', routes.index));

app.listen(8008);
console.log('Koa listening on port 8008');