function sumArrayPromise(arr) {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            const sum = arr.reduce((acc, num) => acc + num, 0);  
            resolve(sum);  
        }, 3000);  
    });  
}  

  
sumArrayPromise([1, 2, 3, 4, 5]).then(console.log); 

async function concurrentPromises(promises, maxConcurrent) {  
    const results = [];  
    const executing = [];  
    
    for (const promise of promises) {  
        const p = Promise.resolve().then(() => promise);  
        results.push(p);  
        
        if (maxConcurrent <= promises.length) {  
            const e = p.finally(() => executing.splice(executing.indexOf(e), 1));  
            executing.push(e);  
            
            if (executing.length >= maxConcurrent) {  
                await Promise.race(executing);  
            }  
        }  
    }  
    
    return Promise.all(results);  
}  
  
concurrentPromises([  
    new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000)),  
    new Promise(resolve => setTimeout(() => resolve('Promise 2'), 500)),  
    new Promise(resolve => setTimeout(() => resolve('Promise 3'), 800))  
], 2).then(console.log);  


async function sequenceAsync(asyncFunctions) {  
    const results = [];  
    for (const asyncFunc of asyncFunctions) {  
        const result = results.length === 0 ? undefined : results[results.length - 1];  
        const nextResult = await asyncFunc(result);  
        results.push(nextResult);  
    }  
    return results;  
}  

  
const asyncFunc1 = async () => 'First';  
const asyncFunc2 = async (prev) => `${prev} -> Second`;  
const asyncFunc3 = async (prev) => `${prev} -> Third`;  

sequenceAsync([asyncFunc1, asyncFunc2, asyncFunc3]).then(console.log);  
