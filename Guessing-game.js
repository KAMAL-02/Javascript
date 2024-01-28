let range = prompt("Enter the range");
console.log(range)
const random = Math.floor(Math.random()*10)+1 ;
let guess = prompt("Enter the guess");

while(true){
    if (guess == "quit"){
        console.log("quitted!")
        break;
    }
    if(guess == random){
        console.log("congo",random);
        break;
    }
    else{
        guess = prompt("try again")
    }
}
