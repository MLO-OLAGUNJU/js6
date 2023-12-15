// My first Code Challenge

//Write code that will return a
//random letter from my name Emmanuel

const myName = "Emmanuel";

const randomNumber = Math.floor(Math.random() * 8 + 1);
const charatMyname = myName.charAt(randomNumber);

console.log(charatMyname);
