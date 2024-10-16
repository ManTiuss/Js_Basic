function capitalizeStrings(words) {  
    return words.map(word => {    
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();  
    });  
}  
const words = ["apple", "banaNA", "kiWi", "ORANGE"];  
console.log(capitalizeStrings(words)); 

function findCommonElements(array1, array2) {  
    return array1.filter(value => array2.includes(value));  
}  
const array1 = [1, 2, 3, 4, 5];  
const array2 = [3, 4, 5, 6, 7];  
console.log(findCommonElements(array1, array2)); 

function analyzeArray(numbers) {  
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);  
    const average = sum / numbers.length;  
    const min = Math.min(...numbers);  
    const max = Math.max(...numbers);  

    return {  
        sum: sum,  
        average: average,  
        min: min,  
        max: max  
    };  
}  

const numbers = [1, 2, 3, 4, 5];  
console.log(analyzeArray(numbers)); 