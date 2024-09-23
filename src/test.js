function calculateAverageGrade(students) {   
    if (students.length === 0) return 0;  
    const totalGrade = students.reduce((sum, student) => {  
        return sum + student.grade;  
    }, 0);  
    const averageGrade = totalGrade / students.length;  
    return averageGrade;  
}  
 
const students = [  
    { name: "Alice", age: 20, grade: 4.5 },  
    { name: "Bob", age: 21, grade: 3.9 },  
    { name: "Charlie", age: 19, grade: 4.8 }  
];  
 
console.log(calculateAverageGrade(students)); // 4.4



const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]

function reverseArray (arr) {
    const newArray = []
    for (let i = arr.lenght - 1; i >= 0; i --) {
        newArray.push(arr[i])
    }
    return newArray;
}

function uniqueValues(array1, array2) {    
    const combinedArray = array1.concat(array2);    
    const uniqueArray = [...new Set(combinedArray)];  
    return uniqueArray;  
}  

const array1 = [1, 2, 3, 4, 5];  
const array2 = [3, 4, 5, 6, 7];  
const uniqueValuesArray = uniqueValues(array1, array2);  
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]