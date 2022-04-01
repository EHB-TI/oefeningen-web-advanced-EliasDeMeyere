'use strict'

//Oefening 1
//alert("Hello World!")

//Oefening 2
/* let a = 10;
a += 5;
console.log(a); */

//Oefening 3 
/* let age = prompt("Geef uw leeftijd in: ");
if (age >= 18){
    console.log("Welkom!")
} else {
    console.log("Toegang geweigerd.")
}*/

// Oefening 4
/* window.onload = function () {

    document.getElementById('Form1').addEventListener('submit', function (evt) {
        evt.preventDefault();
        let naam = document.getElementById("name").value
        let age = document.getElementById("age").value
        let text = (`Uw naam: ${naam}\nUw leeftijd: ${age}`);

        console.log(text)

        let para = document.createElement("p")
        document.getElementById("emptyDiv").appendChild(para).append(text)
    });

}; */

// Oefening 7
/* let zin1 = "hallo!";
let letter1 = zin1.charAt(0);
let zin2 = letter1.toUpperCase() + zin1.substring(1);
console.log(zin2); */

// Oefening 8
/* let name1 = 'mike derycke';
let name2 = '   max power    ';
let name3 = ' judas de verrader';

function capitalize(str) {
    var splitStr = str.trim().toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        //https://stackoverflow.com/a/32589289
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 

console.log(capitalize(name1));
console.log(capitalize(name2));
console.log(capitalize(name3));
 */


// Oefening 9
/* let zin = "Javascript is the main focus of Web Essentials.";
let newZin = zin.replace("Essentials", "Advanced");
console.log(zin);
console.log(newZin); */

// Oefening 10
/* 
let landen = ['China', 'Belgium', 'Germany', 'Japan', 'France', 'Spain', 'The United States of America', 'The United Kingdom of Great Britain and Northern Ireland']

function Longest_Country_Name(country_name){
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  },);
}
console.log(Longest_Country_Name(landen));*/

// Oefening 12
/* const d = new Date();
let dag = d.getDate();
console.log(`Vandaag is het ${d.getDay()}, ${d.getMonth() + 1}, ${d.getFullYear()}`); */


// Oefening 13
/* const vandaag = new Date();
const verjaardag = new Date(2022, 8, 6);

let Difference_In_Time = verjaardag.getTime() - vandaag.getTime();
let Difference_In_Days = Math.abs(Difference_In_Time / (1000 * 3600 * 24));

console.log(Difference_In_Days); */