'use strict';
console.log("Loaded oef6!")

let student = {
    name: "John Doe",
    age: "20",
    degree: "MCT",
    courses: [""],

    setPersonalDetails(data){
        [this.name, this.age, this.degree] = data;
    },

    addCourse(...courses){
        this.courses = [...this.course, ...courses];
    },

    showStudent(){
        console.log("Student data: " + this.name + ", " + this.age + ", " + this.degree /* + "\nThey follow: " + this.courses */)
    }
}

let data = ['Mike Derycke', 29, 'Toegepaste informatica'];
student.setPersonalDetails(data);
student.showStudent();
