const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"]

let outputLeft = document.getElementById('outputLeft')
let outputRight = document.getElementById('outputRight')

function randomNumber(){
    let randomNum = Math.floor(Math.random() * characters.length)
    return randomNum
}

function randomPassword(){
    outputLeft.value = ''
    outputRight.value = ''
    for (let i = 0; i< 15; i++){
        outputLeft.value += String(characters[randomNumber()])
        outputRight.value += String(characters[randomNumber()])
    }
}