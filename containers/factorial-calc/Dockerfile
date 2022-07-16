FROM denoland/deno:alpine

WORKDIR /usr/src/app

COPY . .

RUN deno cache api.ts

EXPOSE 3000
CMD [ "deno", "run", "--allow-net", "api.ts" ]
