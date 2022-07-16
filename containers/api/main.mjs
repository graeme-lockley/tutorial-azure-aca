import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = Router();

router.get('/hello', ctx => {
  ctx.body = 'Hello World';
});

app.use(router.routes());

app.listen(3000);
