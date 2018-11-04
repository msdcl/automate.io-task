let wordInfo = require('./wordInfo')
let constants = require('./constants')


let gameInfo = {}

let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});





let startGame = ()=>{
    console.log("Game instructions:");

    console.log("Enter 2 for hint");
    console.log("Enter 3 to quit game")
    console.log();
    let randomWord = constants.getRandomWord();
    gameInfo['actualWord']=randomWord;

    let def = wordInfo.getDefinition(randomWord);
    let syn = wordInfo.getSynonyms(randomWord);
    let ant =wordInfo.getAntonyms(randomWord);
    Promise.all([def,syn, ant]).then((resolve)=>{
     gameInfo['def']=resolve[0];
     gameInfo['syn']=resolve[1];
     gameInfo['ant']=resolve[2];
     giveHint();

     rl.on('line', (input) => {
       
        let userInput = input.toString().trim()
        if(gameInfo.actualWord ==userInput || gameInfo.syn.indexOf(userInput)!=-1){
            console.log("You win the game");
            process.exit();
        }else{
            if(userInput!=2 && userInput!=3){
            console.log("wrong answer- try again")
             }else if(userInput==2){
                giveHint();
            }else if(userInput==3){
                console.log(`Answer: ${gameInfo.actualWord}`);
                process.exit();
            }
           
        }
      })
    })
}

let giveHint = ()=>{
    let l1= gameInfo.def.length;
    let l2= gameInfo.syn.length;
    let l3 = gameInfo.ant.length;
    let number
    if(l1>0 && l2>0 && l3>0){
      number  = constants.getRandomInt(1,3);
    }else if(l1>0 && l2>0){
        number  = constants.getRandomInt(1,2);
    }else if(l2>0 && l3>0){
        number  = constants.getRandomInt(2,3);
    }else if(l1>0 && l3>0){
        number  = constants.getRandomInt(1,3);
        while(number==2){
            number  = constants.getRandomInt(1,3);
        }
    }else if(l1>0){
        number=1;
    }else if(l2>0){
        number=2;
    }else if(l3>0){
        number=3
    }else {
        console.log("Oops! you lost the game");
        console.log(`Answer: ${gameInfo.actualWord}`);
        process.exit();
    }
    
    if(number-1 === 0){
       console.log("definition of word")
       let index = constants.getRandomInt(1,gameInfo.def.length);
       console.log(gameInfo.def[index-1])
       gameInfo.def.splice(index-1,1)
    }else if(number-1==1){
       console.log('synonyms of word :')
        let index = constants.getRandomInt(1,gameInfo.syn.length);
        console.log(gameInfo.syn[index-1])
        gameInfo.syn.splice(index-1,1)
    }else{
        console.log('antonyms of word :')

        let index = constants.getRandomInt(1,gameInfo.ant.length);
        console.log(gameInfo.ant[index-1])
        gameInfo.ant.splice(index-1,1)
    }
}


module.exports = {
    startGame:startGame
}