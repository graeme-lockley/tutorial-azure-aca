import Koa from 'koa';
import koaRouter from 'koa-router';

const app = new Koa();
const router = koaRouter();

router.get('/hello', (ctx) => {
  ctx.body = 'Hello World';
});

app.use(router.routes());

app.listen(3000);
