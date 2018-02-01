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
//recursive closure
function isPrime(testInteger) {
    //early optimizations to reduce search time.
    //negative numbers can't be prime. neither is 1.
    if (testInteger <= 1) {
        return false;
    }
    if (testInteger == 2) {
        return true;
    }
    if (testInteger % 2 == 0) {
        return false;
    }
    //above this factor pairs are simply mirrored.
    let upperSearchLimit = Math.sqrt(testInteger);
    //TODO should this be made asynchronous? so it doesnt block if large search
    //loop - only test odd numbers
    for (let i = 3; i < upperSearchLimit; i += 2) {
        //test for divisibility with current i
        if (testInteger % i == 0) {
            return false;
        }
    }
    //not divisible therefore prime
    return true;
}
exports.isPrime = isPrime;
function getNearestPrime(testInteger) {
    if (testInteger < 2) {
        return 2;
    }
    else if (isPrime(testInteger)) {
        return testInteger;
    }
    //TODO should this be made asynchronous? so it doesnt block if large search
    for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
        let nextTestInteger = testInteger + i;
        if (isPrime(nextTestInteger)) {
            return nextTestInteger;
        }
        nextTestInteger = testInteger - i;
        if (isPrime(nextTestInteger)) {
            return nextTestInteger;
        }
    }
}
exports.getNearestPrime = getNearestPrime;
function example() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 10; i++) {
            yield new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
            console.log(i);
        }
        return "done";
    });
}
exports.example = example;
//# sourceMappingURL=primes.js.map