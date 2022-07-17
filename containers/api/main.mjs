import Koa from 'koa';
import Router from 'koa-router';
import https from 'https';

const app = new Koa();
const router = new Router();

router.get('/hello', (ctx) => {
  ctx.body = 'Hello World';
});

router.get('/env', (ctx) => {
  ctx.body = JSON.stringify(process.env, null, 2);
});

router.get('/api/v1/factorial/:n([0-9]+)', async (ctx) => {
  const n = ctx.params.n;

  const factorialURN = process.env.FACTORIAL_URN ??
    'tutacafact.victoriouscoast-832e0370.westeurope.azurecontainerapps.io';

  const options = {
    hostname: factorialURN,
    port: 443,
    path: `/api/v1/factorial?${n}`,
    method: 'GET',
  };

  const result = await new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
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
});

app.use(router.routes());

app.listen(3000);
