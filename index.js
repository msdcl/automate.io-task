let constants = require('./app/constants')
let wordInfo = require('./app/wordInfo')
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

rl.on('line', (input) => {

  let finalInput = input.toString().trim().split(" ");
  console.log(finalInput)
  if (finalInput[0] == dictionary.firstArgument) {
    if (dictionary.gameMode) {

    } else {
      if (finalInput[1] == constants.types.definition) {
        wordInfo.getDefinition(finalInput[2]).then((resolve) => {
          console.log(`"Definitions : "`)
          //  console.log(resolve)
          for (let i in resolve) {
            console.log(`${Number(i) + 1}. ${resolve[i].definitions}`)
          }
        }).catch((err) => {
          console.log(err)
        })
      } else if (finalInput[1] == constants.types.synonyms) {
        console.log("synonym of word")
      } else if (finalInput[1] == constants.types.antonyms) {
        console.log("antonyms of word")
      } else if (finalInput[1] == constants.types.examples) {
        wordInfo.getExamples(finalInput[2]).then((resolve) => {
          console.log(`"Examples : "`)
         
          let x = 1;
          for (let i in resolve) {
            let arr = resolve[i].examples;
            for (let j in arr) {
              console.log(`${x}. ${arr[j].text}`)
              x++;
            }

          }
        }).catch((err) => {
          console.log(err)
        })
      } else if (finalInput[1] == constants.types.playGame) {
        console.log("start word game")
      } else if (finalInput[1] == constants.types.fullDict) {
        console.log("full dict of word")
      } else if (finalInput[1] == undefined) {
        console.log("all details of word of the day")
      } else {
        console.log("full dict of word")
      }
    }
  } else {
    console.log("Invalid input")
  }
})


console.log("Welcome to Command Line Dictionary");
console.log("Enter commands as mentioned");

