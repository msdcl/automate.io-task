let type = {
    'definition':'def',
    'synonyms':'syn',
    'antonyms':'ant',
    'examples':'ex',
    'fullDict':'dict',
    'playGame':'play'
}

let baseUrl = ' https://od-api.oxforddictionaries.com/api/v1';
let apiKey = 'c354ea38be2607f5a410b870b9dd7215';
let apiId = 'bd21ad8a';

let dummyWords = ['agree','warm','silence','destroy','gather','gain','high','huge','show','love',
                  'hold','open','close','hot','back','mute','big','new','fast','calm',
                  'easy','divide','diverse','good','lazy','fat','bad','hate','happy','sad',
                  'normal','private','last','front','back','fake','real','friend','future','past'

                 ]
let getRandomInt=(min, max)=> {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }                 
module.exports ={
    types:type,
    baseUrl:baseUrl,
    apiKey:apiKey,
    apiId:apiId,
    getRandomInt:getRandomInt,
    dummyWords:dummyWords
}