function logArguments(fn) {  
    return function(...args) {  
        console.log('Arguments:', args);  
        return fn(...args);  
    };  
}  
 
function validate(fn, validator) {  
    return function(...args) {  
        for (const arg of args) {  
            if (!validator(arg)) {  
                throw new Error('Invalid argument: ' + arg);  
            }  
        }  
        return fn(...args);  
    };  
}  

  
function retry(fn, maxAttempts) {  
    return async function(...args) {  
        let attempts = 0;  
        let lastError;  
        while (attempts < maxAttempts) {  
            try {  
                return await fn(...args);  
            } catch (error) {  
                lastError = error;  
                attempts++;  
            }  
        }  
        throw lastError;  
    };  
}  
  
const myFunction = (a, b) => a + b;  

const loggedFunction = logArguments(myFunction);  
loggedFunction(2, 3);  
 
const isPositive = (num) => num > 0;  

const validatedFunction = validate(myFunction, isPositive);  
try {  
    validatedFunction(2, -3);   
} catch (e) {  
    console.log(e.message); // Виведе: Invalid argument: -3  
}  

// Функція з можливістю повтору  
const unreliableFunction = async () => {  
    if (Math.random() < 0.7) throw new Error('Failed');  
    return 'Success';  
};  

const retriedFunction = retry(unreliableFunction, 5);  
retriedFunction().then(console.log).catch(console.error);