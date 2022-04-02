'use strict';
console.log("Loaded oef7!")

function Student(name, age, degree){
    this.name = name;
    this.age = age;
    this.degree = degree;
    this.courses = [];
    this.setPersonalDetails = function(details){
        [this.name,this.age,this.degree] = details;
    };
    

    /* addCourse(...courses){
        this.courses = [...this.course, ...courses];
    },

    showStudent(){
        console.log("Student data: " + this.name + ", " + this.age + ", " + this.degree)
    } */
    this.showStudent = function(){
        let txt = `Studentname: ${this.name}, ${this.age} years and studying ${this.degree} at EhB. 
Courses are: ${this.courses.join(', ')}.`;

        return txt;
    }

}

let studentList = []

function getData(){
    let name = prompt("What is the student's name?")
    let age = prompt("What is the student's age?")
    let degree = prompt("What is the student's degree?")
    let data = [name, age, degree]
    let student = new Student(data)
    studentList.push(student)
}

function showStudentList(){
    for (let student0 in studentList){
        student0.showStudent();
    }
}

window.onload = function(){
    document.getElementById("knop").addEventListener("click", getData)
    document.getElementById("knop2").addEventListener("click", showStudentList)
    
}