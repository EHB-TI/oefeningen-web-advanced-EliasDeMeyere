'use strict';
console.log('LOADED!')

let color  = {
    nR: 0,
    nG: 0,
    nB: 0,

    showColor: function(){
        return console.log(`rgb(${this.nR},${this.nG},${this.nB})`);

    },

    setColor: function(r, g, b){
        if (r <= 255 || r > 0 && g <= 255 || g > 0 && b <= 255 || b > 0){
            this.nR = r
            this.nG = g
            this.nB = b
            
            return console.log("Succes!")
        } 
        else return console.log("Failure! Invalid data")
    }
} 

let red = prompt('Red-value');
let green = prompt('Green-value');
let blue = prompt('Blue-value');


color.setColor(red,green,blue);
color.showColor();