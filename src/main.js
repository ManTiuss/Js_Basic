function fizzBuzz(numberDivide) {
  if (numberDivide % 3 === 0 && numberDivide % 5 === 0) {
    console.log("FizzBuzz");
  } else if (numberDivide % 3 === 0) {
    console.log("Fizz");
  } else if (numberDivide % 5 === 0) {
    console.log("Buzz");
  }
}

fizzBuzz(15);
fizzBuzz(3);
fizzBuzz(5);



function isLeapYear(year) {  
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {  
      return true;  
    } else {  
      return false;  
    }  
  }  
  
  const yearToCheck = 2024;  
  
  if (isLeapYear(yearToCheck)) {  
    console.log(yearToCheck + " - високосний рік");  
  } else {  
    console.log(yearToCheck + " - не високосний рік");  
  }




function showAge(n) {  
    let ending = "";  
  
    if (n % 10 === 1 && n % 100 !== 11) {  
      ending = "рік";  
    } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) {  
      ending = "роки";  
    } else {  
      ending = "років";  
    }  
  
    console.log("Вам " + n + " " + ending);  
  }  
  
  const age = 25;  
  showAge(age); 


