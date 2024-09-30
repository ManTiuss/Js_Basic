function isPrime(num) {  
    if (num <= 1) return false;  
    for (let i = 2; i <= Math.sqrt(num); i++) {  
        if (num % i === 0) return false;  
    }  
    return true;  
}  

function filterPrimeNumbers(arr) {  
    return arr.filter(isPrime);  
}  

  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
const primeNumbers = filterPrimeNumbers(numbers);  
console.log(primeNumbers); // [2, 3, 5, 7]

function groupMessagesBySource(messages) {  
    return messages.reduce((acc, message) => {  
        const { source, text, date } = message;  
        if (!acc[source]) {  
            acc[source] = [];  
        }  
        acc[source].push({ text, date });  
        return acc;  
    }, {});  
}  

  
const messages = [  
    { source: 'email', text: 'Hello', date: '2023-01-01' },  
    { source: 'sms', text: 'World', date: '2023-01-02' },  
    { source: 'email', text: 'Test', date: '2023-01-03' },  
];  

const groupedMessages = groupMessagesBySource(messages);  
console.log(groupedMessages);  


function groupArrayByKey(arr, key) {  
    return arr.reduce((acc, item) => {  
        const groupKey = item[key];  
        if (!acc[groupKey]) {  
            acc[groupKey] = [];  
        }  
        acc[groupKey].push(item);  
        return acc;  
    }, {});  
}  

 
const data = [  
    { category: 'fruits', name: 'apple' },  
    { category: 'fruits', name: 'banana' },  
    { category: 'vegetables', name: 'carrot' },  
    { category: 'fruits', name: 'orange' },  
];  

const groupedData = groupArrayByKey(data, 'category');  
console.log(groupedData);  
