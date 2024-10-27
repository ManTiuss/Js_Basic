// Функція для обчислення n-ого числа Фібоначчі  
function fibonacci(n) {  
    if (n <= 1) return n;  
    return fibonacci(n - 1) + fibonacci(n - 2);  
}  

// Функція для знаходження паліндрома і рахунку кроків  
function findPalindrome(num) {  
    let steps = 0;  

    function isPalindrome(n) {  
        return n.toString() === n.toString().split('').reverse().join('');  
    }  

    function reverseNumber(n) {  
        return parseInt(n.toString().split('').reverse().join(''), 10);  
    }  

    while (!isPalindrome(num)) {  
        num += reverseNumber(num);  
        steps++;  
    }  

    return { result: num, steps };  
}  

// Функція для генерації всіх перестановок масиву  
function permute(arr) {  
    const result = [];  

    function generatePermutation(current, remaining) {  
        if (remaining.length === 0) {  
            result.push(current);  
        } else {  
            for (let i = 0; i < remaining.length; i++) {  
                generatePermutation([...current, remaining[i]], remaining.filter((_, index) => index !== i));  
            }  
        }  
    }  

    generatePermutation([], arr);  
    return result;  
}  

// Приклади використання функцій  
console.log(fibonacci(7)); 
console.log(findPalindrome(196));  
console.log(permute([1, 2, 3])); 