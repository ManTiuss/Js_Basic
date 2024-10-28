// Функція randomDelayPrint  
function randomDelayPrint(message) {  
    for (let i = 0; i < message.length; i++) {  
        const delay = Math.random() * 1000; // Випадкова затримка від 0 до 1000 мс  
        setTimeout(() => {  
            console.log(message[i]);  
        }, delay);  
    }  
}  

// Функція debounce  
function debounce(callback, delay) {  
    let timeoutId;  
    return function(...args) {  
        clearTimeout(timeoutId);  
        timeoutId = setTimeout(() => {  
            callback.apply(this, args);  
        }, delay);  
    };  
}  

// Функція intervalRace  
async function intervalRace(functions, t) {  
    const results = [];  
    for (const func of functions) {  
        const result = await new Promise((resolve) => {  
            setTimeout(() => {  
                resolve(func());  
            }, t);  
        });  
        results.push(result);  
    }  
    return results;  
}  
  
randomDelayPrint("Hello, world!");  
  
const log = debounce(() => console.log('Debounced!'), 1000);  
log();  
log();  

  
const functionsArray = [  
    () => "First function executed.",  
    () => "Second function executed.",  
    () => "Third function executed."  
];  

intervalRace(functionsArray, 2000).then(results => {  
    console.log(results);  
});