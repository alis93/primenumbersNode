import * as Router from "koa-router";
import * as Primes from './primes';

export const router:Router = new Router();

router.prefix('/api');

//some simple testing endpoints
router
    .get('/test', async (ctx,next)=>{
        console.log('The api works');
        ctx.body = "The api works";
        ctx.status = 200;
        await next();
    })
    .get('/error-test',async (ctx,next)=>{
        ctx.throw(500,'Error Message');

    });


router.get('/async-example',async (ctx,next)=>{
    console.log("lets go");
    let i = await Primes.example();
    console.log(i);
    ctx.body = i;
    await next();
});


//endpoint for finding nearest prime
router.get('/nearest-prime/:testInteger',async (ctx,next)=>{
    let testInteger:number = +ctx.params.testInteger;
    let nearestPrime:number = Primes.getNearestPrime(testInteger);
    ctx.body = nearestPrime;
    ctx.body = {
        "original":testInteger,
        "nearestPrime":nearestPrime
    };
    await next();
});
