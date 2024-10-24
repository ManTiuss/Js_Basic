// Функція для створення ітератора для об'єкта notifications  
function* flatNotifications(notifications) {  
    for (const category in notifications) {  
        for (const item of notifications[category]) {  
            yield item;  
        }  
    }  
}  
  
const notifications = {  
    category1: [{ id: 1, message: 'Notification 1' }, { id: 2, message: 'Notification 2' }],  
    category2: [{ id: 3, message: 'Notification 3' }],  
};  

for (const notification of flatNotifications(notifications)) {  
    console.log(notification);  
}  
  
function memoize(fn, cacheSize) {  
    const cache = new Map();  
    
    return function(...args) {  
        const key = JSON.stringify(args);  
        
        if (cache.has(key)) {  
            return cache.get(key);  
        }  
        
        const result = fn(...args);  
        
        if (!cache.has(key)) {  
            if (cache.size >= cacheSize) {  
                const firstKey = cache.keys().next().value; 
                cache.delete(firstKey);   
            }  
            cache.set(key, result);   
        }  
        
        return result;  
    };  
}  
  
function computeExpensiveOperation(x) {    
    return x * x; 
}  
  
const memoizedCompute = memoize(computeExpensiveOperation, 3);  

console.log(memoizedCompute(2)); // 4  
console.log(memoizedCompute(3)); // 9  
console.log(memoizedCompute(2)); // 4 (з кешу)  
console.log(memoizedCompute(4)); // 16  
console.log(memoizedCompute(5)); // 25  
console.log(memoizedCompute(3)); // 9 (з кешу, 3 вже є в кеші)  
console.log(memoizedCompute(6)); // 36  
console.log(memoizedCompute(2)); // 4 (потрібно переобчислити, оскільки кеш переповнений)