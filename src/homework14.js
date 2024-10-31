class Student {  
    constructor(firstName, lastName, birthYear, courses = []) {  
        this.firstName = firstName;  
        this.lastName = lastName;  
        this.birthYear = birthYear;  
        this.courses = courses; // Array of course objects  
        this.grades = {};  
        this.attendance = {};  
    }  

    addCourse(course) {  
        this.courses.push(course);  
        this.grades[course] = [];  
        this.attendance[course] = [];  
    }  

    removeCourse(course) {  
        const index = this.courses.indexOf(course);  
        if (index > -1) {  
            this.courses.splice(index, 1);  
            delete this.grades[course];  
            delete this.attendance[course];  
        }  
    }  

    addGrade(course, grade) {  
        if (this.grades[course]) {  
            this.grades[course].push(grade);  
        } else {  
            console.error(`Course ${course} not found.`);  
        }  
    }  

    addAttendance(course) {  
        if (this.attendance[course]) {  
            this.attendance[course].push(true);  
        } else {  
            console.error(`Course ${course} not found.`);  
        }  
    }  

    getAverageGrade(course) {  
        const grades = this.grades[course];  
        if (!grades || grades.length === 0) return 0;  

        const total = grades.reduce((sum, grade) => sum + grade, 0);  
        return total / grades.length;  
    }  

    getAverageAttendance(course) {  
        const attendance = this.attendance[course];  
        if (!attendance) return 0;  

        return (attendance.length / (this.attendance[course].length + 0.001)) * 100; // Prevent division by zero  
    }  

    getTotalClassesAttended(course) {  
        return this.attendance[course] ? this.attendance[course].length : 0;  
    }  

    changeCourse(oldCourse, newCourse) {  
        this.removeCourse(oldCourse);  
        this.addCourse(newCourse);  
    }  

    getStudentInfo() {  
        return {  
            name: this.firstName,  
            lastName: this.lastName,  
            birthYear: this.birthYear,  
            courses: this.courses,  
            grades: this.grades,  
            attendance: this.attendance,  
        };  
    }  
}  

class Group {  
    constructor() {  
        this.students = [];  
    }  

    addStudent(student) {  
        this.students.push(student);  
    }  

    removeStudent(student) {  
        const index = this.students.indexOf(student);  
        if (index > -1) {  
            this.students.splice(index, 1);  
        }  
    }  

    getRankingByAttendance() {  
        return this.students.sort((a, b) => {  
            const avgA = a.getAverageAttendance(a.courses[0] || "");  
            const avgB = b.getAverageAttendance(b.courses[0] || "");  
            return avgB - avgA;  
        });  
    }  

    getRankingByGrades() {  
        return this.students.sort((a, b) => {  
            const avgA = a.getAverageGrade(a.courses[0] || "");  
            const avgB = b.getAverageGrade(b.courses[0] || "");  
            return avgB - avgA;  
        });  
    }  
}