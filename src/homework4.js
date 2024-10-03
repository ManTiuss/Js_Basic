function isPrime(N) {  
    if (N <= 1) return false;  
    for (let i = 2; i <= Math.sqrt(N); i++) {  
        if (N % i === 0) return false;  
    }  
    return true;  
}  

function perfectNumbers(N) {  
    const perfectNums = [];  
    for (let i = 1; i <= N; i++) {  
        let sum = 0;  
        for (let j = 1; j < i; j++) {  
            if (i % j === 0) {  
                sum += j;  
            }  
        }  
        if (sum === i) {  
            perfectNums.push(i);  
        }  
    }  
    return perfectNums;  
}  

function drawTree(height) {  
    let tree = '';  
    for (let i = 1; i <= height; i++) {  
        tree += ' '.repeat(height - i) + '*'.repeat(2 * i - 1) + ' ';  
    }  
    console.log(tree.trim().replace(/\n/g, ' '));  
}  
 
const N = parseInt(prompt("Введіть число N для перевірки простоти та знаходження досконалих чисел:"));  
if (isPrime(N)) {  
    console.log(`Число ${N} є простим числом.`);  
} else {  
    console.log(`Число ${N} не є простим числом.`);  
}  

const perfects = perfectNumbers(N);  
console.log(`Досконалі числа від 1 до ${N}: ${perfects.join(', ')}`);  

const height = parseInt(prompt("Введіть висоту ялинки:"));  
drawTree(height);

