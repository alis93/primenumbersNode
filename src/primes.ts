//recursive closure
export function isPrime(testInteger:number):boolean{


    //early optimizations to reduce search time.
    //negative numbers can't be prime. neither is 1.
    if (testInteger <= 1) {
        return false;
    }
    if (testInteger == 2){
        return true;
    }
    if (testInteger % 2 == 0){
        return false;
    }

    //above this factor pairs are simply mirrored.
    let upperSearchLimit = Math.sqrt(testInteger);

    //TODO should this be made asynchronous? so it doesnt block if large search
    //loop - only test odd numbers
    for (let i = 3;i<upperSearchLimit; i+=2){
        //test for divisibility with current i
        if (testInteger % i == 0){
            return false;
        }
    }
    //not divisible therefore prime
    return true
}

export function getNearestPrime(testInteger:number):number{


    if(testInteger<2){
        return 2;
    }
    else if(isPrime(testInteger)){
        return testInteger;
    }

    //TODO should this be made asynchronous? so it doesnt block if large search
    for(let i:number = 0; i<Number.MAX_SAFE_INTEGER;i++){

        let nextTestInteger:number = testInteger+i;
        if(isPrime(nextTestInteger)){
            return nextTestInteger;
        }
        nextTestInteger = testInteger-i;
        if(isPrime(nextTestInteger)){
            return nextTestInteger;
        }
    }

}


export async function example(){

    for (let i = 0; i<10;i++){
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
        console.log(i);
    }
    return "done";
}