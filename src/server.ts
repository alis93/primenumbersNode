// const Koa = require('koa');
import * as Koa from 'koa';
import {router} from './api';
const app = new Koa();
// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});


// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`url: ${ctx.method} ${ctx.url}\ntime taken : ${ms}`);
});

//error handler

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
});

// response
app.use(router.routes());
app.use(router.allowedMethods());

export const server = app.listen(3000);
