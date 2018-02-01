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
const Router = require("koa-router");
const Primes = require("./primes");
exports.router = new Router();
exports.router.prefix('/api');
//some simple testing endpoints
exports.router
    .get('/test', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    console.log('The api works');
    ctx.body = "The api works";
    ctx.status = 200;
    yield next();
}))
    .get('/error-test', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.throw(500, 'Error Message');
}));
exports.router.get('/async-example', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    console.log("lets go");
    let i = yield Primes.example();
    console.log(i);
    ctx.body = i;
    yield next();
}));
//endpoint for finding nearest prime
exports.router.get('/nearest-prime/:testInteger', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    let testInteger = +ctx.params.testInteger;
    let nearestPrime = Primes.getNearestPrime(testInteger);
    ctx.body = nearestPrime;
    ctx.body = {
        "original": testInteger,
        "nearestPrime": nearestPrime
    };
    yield next();
}));
//# sourceMappingURL=api.js.map