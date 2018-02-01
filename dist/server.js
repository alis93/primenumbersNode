"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const Koa = require('koa');
const Koa = require("koa");
const api_1 = require("./api");
const app = new Koa();
// x-response-time
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const start = Date.now();
    yield next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
}));
// logger
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const start = Date.now();
    yield next();
    const ms = Date.now() - start;
    console.log(`url: ${ctx.method} ${ctx.url}\ntime taken : ${ms}`);
}));
//error handler
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield next();
    }
    catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
}));
// response
app.use(api_1.router.routes());
app.use(api_1.router.allowedMethods());
exports.server = app.listen(3000);
//# sourceMappingURL=server.js.map