import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { calculate } from "./factorial.ts";

const router = new Router();

router.get("/api/v1/hello", (context: Context) => {
  context.request.url.search;

  context.response.body = {
    success: true,
    msg: "Hello World",
  };
});

router.get("/api/v1/factorial", (context: Context) => {
  const text = context.request.url.search.slice(1);

  if (text === "") {
    context.response.status = 412;
    context.response.type = "application/json";
    context.response.body = {
      success: false,
      msg: "Expected number parameter",
    };
  } else {
    const v = calculate(BigInt(text));

    context.response.type = "application/json";
    context.response.body = v.toString();
  }
});

// deno-lint-ignore no-explicit-any
const errorHandler = async (context: Context, next: any) => {
  try {
    await next();
  } catch (err) {
    context.response.status = 500;
    context.response.body = { msg: err.message };
  }
};

const fourZeroFour = (context: Context) => {
  context.response.status = 404;
  context.response.type = "application/json";
  context.response.body = { msg: "Not Found !!" };
};

const app = new Application();
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(fourZeroFour);

const port = 3000;

console.log(`Server running on port ${port}`);
app.listen(`0.0.0.0:${port}`);
