import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/hello', (ctx) => {
  ctx.body = `Hello World at ${process.env.FACTORIAL_URN}`;
});

router.get('/env', (ctx) => {
  ctx.body = JSON.stringify(process.env, null, 2);
});

app.use(router.routes());

app.listen(3000);
