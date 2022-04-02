'use strict';
console.log("Loaded!")

let student = {
    name: "",
    age: "",
    degree: "",
    courses: [""],

    setPersonalDetails(name, age, degree){
        this.name = name
        this.age = age
        this.degree = degree
    },

    addCourse(course){
        this.courses.push(course);
    },

    showStudent(){
        console.log("Student data: " + this.name + ", " + this.age + ", " + this.degree + "\nThey follow: " + this.courses)
    }
}

let naam = prompt("Wat is uw naam?");
let leeftijd = prompt("Hoe oud bent u?");
let richting = prompt("Welke richting volgt u?");

student.setPersonalDetails(naam, leeftijd, richting)

while (true){
    //While(true) blijft herhalen tot er een 'break' statement in de code is (zie line 38)
    let c = prompt('Course?');
    if (c){
        student.addCourse(c);
    }
    else {
        break;
    }
}

student.showStudent();