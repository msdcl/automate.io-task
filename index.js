let constants = require('./app/constants')
let wordInfo = require('./app/wordInfo')
let game = require('./app/game')


let executeCommands = (cmd, word) => {
  // console.log(cmd);
  // console.log(word)
  if (cmd == undefined) {
    wordInfo.getInfoOfWordOfDay().then((resolve)=>{
   
      printWordInfo(resolve);
    })
  } else {

    switch (cmd) {
      case 'def':
        if (word == undefined) {
          console.log("Please enter word");
        } else {
          wordInfo.getDefinition(word).then((resolve) => {
            console.log(`"Definitions : "`)
            let x = 1;
            for (let i in resolve) {
              console.log(`${x}. ${resolve[i]}`)
              x++;
            }
            process.exit();
          }).catch((err) => {
           
            console.log(err)
          })
         
        }

        break;
      case 'syn':
        if (word == undefined) {
          console.log("Please enter word");
        } else {
          wordInfo.getSynonyms(word).then((resolve) => {
            console.log(`"Synonyms : "`)
            //  console.log(resolve)
            let x = 1;
            for (let i in resolve) {
              console.log(`${x}. ${resolve[i]}`)
              x++;
            }
            process.exit()
          }).catch((err) => {
            console.log(err)
          })
        }


        break;
      case 'ant':
        if (word == undefined) {
          console.log("Please enter word");
        } else {
          wordInfo.getAntonyms(word).then((resolve) => {
            console.log(`"Antonyms : "`)
            //  console.log(resolve)
            let x = 1;
            for (let i in resolve) {
              console.log(`${x}. ${resolve[i]}`)
              x++;
            }
            process.exit()
          }).catch((err) => {
            console.log(err)
          })
        }

        break;

      case 'ex':
        if (word == undefined) {
          console.log("Please enter word");
        } else {
          wordInfo.getExamples(word).then((resolve) => {
            console.log(`"Examples : "`)

            let x = 1;
            for (let i in resolve) {
              let arr = resolve[i].examples;
              for (let j in arr) {
                console.log(`${x}. ${arr[j].text}`)
                x++;
              }

            }
            process.exit();
          }).catch((err) => {
            console.log(err)
          })
        }

        break;

      case 'play':
        game.startGame();
        break;
      case 'dict':
        if (word == undefined) {
          console.log("Please enter word");
        } else {
          wordInfo.getAllInfoOfWord(word).then((resolve) => {
            printWordInfo(resolve)
          })
        }

        break;
      default:
        if (word != undefined) {
          console.log("please enter correct command")
        }else{
          wordInfo.getAllInfoOfWord(cmd).then((resolve) => {
            printWordInfo(resolve)
          })
        }
       
    }

  }


}



let printWordInfo = (resolve) => {
  for (let x in resolve) {
    if (x == 0) {
      console.log("'Definitions':")
      let y = 1;
      for (let j of resolve[x]) {
        console.log(`${y}. ${j}`);
        y++;
      }
    } else if (x == 1) {
      console.log("'Synonyms':")
      let y = 1;
      for (let j of resolve[x]) {
        console.log(`${y}. ${j}`);
        y++;
      }
    } else if (x == 2) {
      console.log("'Antonyms':")
      let y = 1;
      for (let j of resolve[x]) {
        console.log(`${y}. ${j}`);
        y++;
      }
    }else if(x==3){
      let y = 1;
      console.log("'Examples':")
            for (let i of resolve[x]) {
              let arr = i.examples;
              for (let j in arr) {
                console.log(`${y}. ${arr[j].text}`)
                y++;
              }

            }
    }
    console.log()
  }
  process.exit();
}
console.log("Welcome to Command Line Dictionary");

module.exports = {
  executeCommands: executeCommands
}