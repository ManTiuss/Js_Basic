function doubleLetter(str) {  
    let result = '';  
    for (let i = 0; i < str.length; i++) {  
        result += str[i].repeat(2);  
    }  
    return result;  
}  

  
console.log(doubleLetter('hello')); 

function padString(str, length, symbol, toLeft = false) {  
    if (str.length >= length) {  
        return str; 
    }  
    
    const paddingLength = length - str.length;  
    const padding = symbol.repeat(paddingLength);   
    
    return toLeft ? padding + str : str + padding; 
}  

  
console.log(padString('Ivan', 6, '*'));  
console.log(padString('Ivan', 6, '*', true)); 

function camelCase(str, separator) {  
    return str  
        .split(separator)  
        .map((word, index) => {  
            if (index === 0) {  
                return word.toLowerCase();   
            }  
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // інші слова з великої  
        })  
        .join('');  
}  
  
console.log(camelCase('hello_world_example', '_'));   
console.log(camelCase('this-is-a-test', '-')); 