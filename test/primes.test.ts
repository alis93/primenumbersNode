const request = require("supertest");
import {isPrime,getNearestPrime} from "../src/primes";


beforeEach(() => {

});

afterEach(() => {

});


describe("testing for primes", () => {
    it("should return that -100 is not prime", () => {
        let isPrimeNumber:boolean = isPrime(-10);
        expect(isPrimeNumber).toBeFalsy();
    });
    it("should return that 11 is a prime", () => {
        let isPrimeNumber:boolean = isPrime(11);
        expect(isPrimeNumber).toBeTruthy();
    });


    it("should return that 51 is not a prime", () => {
        let isPrimeNumber:boolean = isPrime(51);
        expect(isPrimeNumber).toBeFalsy();
    });

    it("should return that 997637 is a prime", () => {
        let isElevenPrime:boolean = isPrime(997637);
        expect(isElevenPrime).toBeTruthy();
    });

    it("should return that 4000 is not a prime", () => {
        let isElevenPrime:boolean = isPrime(4000);
        expect(isElevenPrime).toBeFalsy();
    });
});

describe("find the nearest primes", ()=>{
    it("should return 29 when 29 is passed in", () => {
        let nearestPrime:number = getNearestPrime(29);
        expect(nearestPrime).toEqual(29);
    });

    it("should return 2 when -100 is passed in", () => {
        let nearestPrime:number = getNearestPrime(-100);
        expect(nearestPrime).toEqual(2);
    });

    it("should return 1253839 when 1253840 is passed in", () => {
        let nearestPrime:number = getNearestPrime(1253840);
        expect(nearestPrime).toEqual(1253839);
    });
});
