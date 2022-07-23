import Koa from 'koa';
import Router from 'koa-router';
import https from 'https';
import http from 'http';

const app = new Koa();
const router = new Router();

const ackermannURN = process.env.ACKERMANN_URN ?? 'localhost';
const ackermannPort = process.env.ACKERMANN_PORT ?? '443';

const factorialURN = process.env.FACTORIAL_URN ?? 'localhost';
const factorialPort = process.env.FACTORIAL_PORT ?? '443';

router.get('/hello', (ctx) => {
  ctx.body = 'Hello World';
});

router.get('/env', (ctx) => {
  ctx.body = JSON.stringify(process.env, null, 2);
});

router.get('/api/v1/ackermann/:m([0-9]+)/:n([0-9]+)', async (ctx) => {
  const m = ctx.params.m;
  const n = ctx.params.n;
  const url = `/api/v1/ackermann/${m}/${n}`;

  await callRestAPI(ctx, ackermannURN, ackermannPort, url);
});

router.get('/api/v1/factorial/:n([0-9]+)', async (ctx) => {
  const n = ctx.params.n;
  const url = `/api/v1/factorial?${n}`;

  await callRestAPI(ctx, factorialURN, factorialPort, url);
});

const callRestAPI = async (ctx, urn, port, path) => {
  const protocol = urn.indexOf('.') === -1 ? http : https;

  const options = {
    hostname: urn,
    port: port,
    path: path,
    method: 'GET',
  };

  const result = await new Promise((resolve, reject) => {
    const req = protocol.request(options, (res) => {
      res.on('data', (d) => {
        resolve(Buffer.from(d).toString());
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });

  ctx.body = result;
};

app.use(router.routes());

app.listen(3000);
