const Koa = require('koa');
const _ = require('koa-route');

const app = new Koa();

const routes = {
  index: (ctx) => {
    console.log('Koa hitting index route');
    ctx.body = { token: 'fake-token' };
  }
};

app.use(_.get('/', routes.index));

app.listen(process.env.PORT || 8008);
console.log('Koa listening on port 8008');