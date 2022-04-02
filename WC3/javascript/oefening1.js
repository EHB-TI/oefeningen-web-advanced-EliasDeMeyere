'use strict';
window.onload = function(){
    console.log("Script Loaded!")
    document.getElementById('register').addEventListener('click', createStudent);

    let listStudents = []; // Lijst van de studenten

    //Student object constructor
    function Student(name, age, degree){
        this.name = name;
        this.age = age;
        this.degree = degree;
        this.courses = [];
        this.setPersonalDetails = function(details){
            [this.name,this.age,this.degree] = details;
        };
        this.addCourse = function(course){
            this.courses.push(course);
        };
        this.showStudent = function(){
            let txt = `Studentname: ${this.name}, ${this.age} years and studying ${this.degree} at EhB. 
            Courses are: ${this.courses.join(', ')}.`;
            return txt;
        }

    }

    function createStudent(){
        
        //ask for details
        let name = document.getElementById("inputName").value
        let age = document.getElementById("inputAge").value

        let radios = document.querySelector('input[type=radio]:checked');
        let boxes = document.querySelectorAll('input[type=checkbox]:checked');

        let student = new Student(name,age, radios.value);
        for(let c of boxes){
            student.addCourse(c.value);
        }

        


        //Toevoegen aan lijst
        listStudents.push(student); 

        addAlert(true, 'Student is successfully registered');
    }

    function showStudents(){
        let div = document.getElementById('content');
        for(let s of listStudents){
            let p = document.createElement('p');
            p.innerHTML = s.showStudent();
            div.appendChild(p);
        }
    }

    function addAlert(status, message){
        //Function to add error or succes alert
        let content = '';
        if(status){
            //success
            content = `<div class="alert alert-success" role="alert">
 ${message}
</div>`
        }else{
            //Error
            content = `<div class="alert alert-danger" role="alert">
  ${message}
</div>`
        }

        //Add content to messages div
        document.getElementById('messages').innerHTML = content;
    }

};



















