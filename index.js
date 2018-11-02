
let dictionary = {
      'firstArgument': './dict',
      'gameMode': false
  };


let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line',(input)=>{
   
    let finalInput = input.toString().trim().split(" ");
    console.log(finalInput)
})


  console.log("Welcome to Command Line Dictionary");


