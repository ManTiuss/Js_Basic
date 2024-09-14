function reverseString(str) {  
    return str.split('').reverse().join('');  
}  
 
const result = reverseString("Привіт, світ!");  
console.log(result);

function isPalindrome(str) {  
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();  
    const reversedStr = cleanedStr.split('').reverse().join('');  
    return cleanedStr === reversedStr;  
}  

console.log(isPalindrome("A man a plan a canal Panama"));   
console.log(isPalindrome("Hello"));                            
console.log(isPalindrome("Able was I ere I saw Elba"));  


 function findGCD(a, b) {  
      
    while (b !== 0) {  
        let temp = b;  
        b = a % b;      
        a = temp;      
    }  
    return Math.abs(a);   
}  

  
console.log(findGCD(48, 18));  // 6  
console.log(findGCD(56, 98));  // 14  
console.log(findGCD(101, 10)); // 1