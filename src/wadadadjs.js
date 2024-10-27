// Функція для обчислення n-ого числа Фібоначчі  
function fibonacci(n) {  
    if (n === 0) {  
        return 0;  
    } else if (n === 1) {  
        return 1;  
    } else {  
        return fibonacci(n - 1) + fibonacci(n - 2);  
    }  
}  

// Функція для знаходження паліндрома   
function findPalindrome(num) {  
    let steps = 0;  

    // Перевірка, чи число є паліндромом  
    function isPalindrome(n) {  
        const str = n.toString();  
        return str === str.split('').reverse().join('');  
    }  

    // Обертаємо число  
    function reverseNumber(n) {  
        return parseInt(n.toString().split('').reverse().join(''), 10);  
    }  

    // Основний цикл для знаходження паліндрома  
    while (!isPalindrome(num)) {  
        num += reverseNumber(num);  
        steps++;  
    }  

    return { result: num, steps: steps };  
}  

// Функція для генерації перестановок  
function permute(arr) {  
    if (arr.length === 0) return [[]];  

    const firstItem = arr[0];  
    const restItems = arr.slice(1);  

    const perms = permute(restItems);  
    const allPermutations = [];  

    for (const perm of perms) {  
        for (let i = 0; i <= perm.length; i++) {  
            const newPerm = [...perm.slice(0, i), firstItem, ...perm.slice(i)];  
            allPermutations.push(newPerm);  
        }  
    }  

    return allPermutations;  
}  

// Приклади використання  
console.log(fibonacci(7)); // 13  
console.log(findPalindrome(196)); // { result: 'some palindrome', steps: steps }  
console.log(permute([1, 2, 3])); // всі перестановки масиву