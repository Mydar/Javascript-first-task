//save name in a variable
let fullname = "Hameedah Adebanjo";

//save courses in an array
let courses = ["HTML", "CSS", "Javascript", "NodeJS", "Python", "PHP", "GO", "C#"];

//display name and courses to console;
console.log(fullname);
console.log(courses);

// check number of courses
let n = courses.length;

//check if number of courses is even or odd and display the respective set (odd or even) numbers from 1-200(inclusive) to console.
if (n % 2 == 0) {
    for (let i = 1; i <= 200; i++) {
        if (i % 2 == 0) {
            console.log(i);
        } 
    }
} else if (n % 2 == 1) {
    for (let i = 1; i <= 200; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}