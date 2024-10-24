"use strict";
// console.log(true === 1)
// console.log(null == 0)
// console.log(null > 0)
// console.log(null >= 0)
// console.log(12 && 'hello' || false && 100)
// function fizzBuzz (numberDevide) {
//     if(numberDevide % 3 === 0 && numberDevide % 5 === 0) {
//        console.log('FizzBuzz')
//     } else if (numberDevide % 3 === 0) {
//         console.log('Fizz')
//     } else if (numberDevide % 5 === 0) {
//         console.log('Buzz')
//     }
// }
// fizzBuzz(15)
// fizzBuzz(3)
// fizzBuzz(5)
// function checkNumbers (num1, num2, num3) {
//     return (num1 > 10 && num2 < 5) || (num3 === 0)
// }
// console.log(checkNumbers(12, 3, 1))
// console.log(checkNumbers(9, 4, 0))

// let year = prompt('В якому рокі була опоблікована специфікація ECMAScript-2015')
// if(year < 2015) {
//     alert('Зарано...')
// } else if (year > 2015) {
//     alert('Запізно')
// } else {
//     alert('Саме так')
// }

// let accessAllowed
// let age = prompt('Скільки вам років', '')
// if (age > 18) {
//     accessAllowed = true
// } else {
//     accessAllowed = false
// }
// alert(accessAllowed)

// let company = prompt('Яка компанія створила JavaScript?', '');
// (company == 'Netscape') ?
//    alert('Правильно!') : alert('Неправильно.');

// let company = prompt('Яка офіційна назва JavaScript?', '')
// if(company == 'ECMAScript') {
//     alert ('Правильно')
// } else {
//     alert('Неправильно')
// }

// let value = prompt ('Ведіть число', 0)
// if (value > 0) {
//     alert(1)
// }else if (value < 0) {
//     alert(-1)
// }else {
//     alert(0)
// }

// let message = (login == 'Привіт') ? 'Привіт' :
// (login == 'Директор') ? 'Вітаю':
// (login == '') ? 'Немає логіну':
//

// if (!(age >= 14 && age <= 90)) {
// }

// let userName = prompt ('Хто там', '')
// if (userName === 'Admin') {
//     let pass = prompt ('Пароль', '')
//     if (pass === 'Господар') {
//         alert ('Ласкаво просимо')
//     } else if (pass === '' || pass === null) {
//         alert ('скасовано')
//     } else {
//         alert ('Пароль не вірний')
//     }
// } else if (userName === '' || userName === null) {
//     alert('Скасовано')
// } else {
//     alert('Я вас не знаю')
// }

// ЦИКЛИ

// for (let i = 0; i < 3; i++) {
//     alert(i)
// }

// for (let i = 2; i < 10; i++ )
//     if (i % 2 == 0) {
//         console.log(i)
//

// let i = 0;
// while (i < 3) {
//   console.log(`Number ${i}!`);
//   i++;
// }

// let num;

// do {
//     num = prompt ('Ведене чило, більше за 100?', 0)
// } while (num <=100 && num)

// let n = 10;
// for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0)
//     console.log(i);
// }

// outer:for(let i = 0 ; i < 10; i ++) {
//     for (let j = 0; j < 3; j++) {
//         let input = +prompt (`Введіть кординати, ${i}, ${j}` )
//         if(!input) break outer
//     }
// }
// alert('Done')

// let num
// for(;;) {
//    num = prompt('Ведене число більше за 100', 0)
//    if(num > 10 || !num) {
//     brake
//    }
// }

// let n = 10
// nextPrime:
// for(let i = 2; i <= n; i++) {
//     for(let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime
//     }
//     console.log(i)
// }

// if (browser == "Edge") {
//   alert('You"ve got the edge');
// } else if (
//   browser == "Chrome" ||
//   browser == "Fire fox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   alert("Ми підтримуємо і ці браузери");
// } else {
//   alert("Маємо надію, що ця сторінка виглядаж добре!");
// }

// let a = +prompt("a?", "");
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2,3");
//     break;
// }

// let userName = 'Ivan'
// function showMasage(params) {
//     userName = 'Bogdan'
//     let message = 'Hi helthy ' + userName
//     alert(message)
// }

// alert(userName)
// showMasage()
// alert(userName)

// function showMasage(from, text) {
//     alert(from + '' + text)
// }
// showMasage('Anna ', 'Hello!')
// showMasage('Anna ', 'How are you?')

// function checkAge(age) {
//     if (age >= 18) {
//         return true
//     } else {
//         return confirm('Увас є дозвіл батьків?')
//     }
// }

// let age = prompt('Скільки вам років?', 18)
// if (checkAge(age)) {
//     alert('Доступ надано')
// } else {
//     alert('Доступ не надано')
// }

// function min(a,b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// switch (1) {
//     case 0:
//         console.log('Zero')
//         break;
//     case 1:
//         console.log('One')
//         break;
//     case 2:
//         console.log('Two')
//         break;
//     case 3:
//         console.log('Three')
//         break;
//     case 4:
//         console.log('Four')
//         break;
//     case 5:
//         console.log('Five')
//         break;
//     case 6:
//         console.log('Six')
//         break;
//     case 7:
//         console.log('Seven')
//         break;
//     case 8:
//         console.log('Eight')
//         break;
//     case 9:
//         console.log('Nine')
//         break;

//     default:
//         break;
// }