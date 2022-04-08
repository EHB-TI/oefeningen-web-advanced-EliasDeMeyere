'use strict'

console.log("Loaded!");

let Nummer = Math.floor(Math.random() * 20) + 1;
// console.log(Nummer)

function compareNumber(Nummer, value){
    let para = document.createElement("p");
    // document.getElementById(div2).appendChild()
    if (Nummer == value){
        let uitkomst = document.createTextNode("Je hebt het mysterieuze nummer geraden!")
        para.appendChild(uitkomst);
        return;
    } else if (Nummer < value){
        let uitkomst = document.createTextNode("Het mysterieuze getal is hoger. Raad nog eens!")
        para.appendChild(uitkomst);
        return;
    } else if (Nummer > value){
        let uitkomst = document.createTextNode("Het mysterieuze getal is lager. Raad nog eens!")
        para.appendChild(uitkomst);
        return;
    } else {
        return console.log("Error! Not a number!")
    }
}

window.onload = () => {
    document.getElementById("form").onclick = compareNumber()
}