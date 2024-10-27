const summarize = (num) => (arg = 1) => num + arg;  
 
const counter = (startValue, step) => {  
    let currentValue = startValue;  
    return {  
        increment: () => (currentValue += step),  
        decrement: () => (currentValue -= step),  
        reset: () => (currentValue = startValue),  
        value: () => currentValue        
    };  
};  
  
const sequence = (...fns) => (initialValue) =>  
    fns.reduce((result, fn) => fn(result), initialValue);  

 
const addFive = summarize(5);  
console.log(addFive(3)); // 8  
console.log(addFive());   // 6  

  
const myCounter = counter(10, 2);  
console.log(myCounter.increment()); // 12  
console.log(myCounter.increment()); // 14  
console.log(myCounter.decrement()); // 12  
console.log(myCounter.reset());     // 10  
  
const addThree = summarize(3);  
const multiplyByTwo = (x) => x * 2;  
const seq = sequence(addFive, addThree, multiplyByTwo);  

console.log(seq(2)); // ((2 + 5) + 3) * 2 = 16

