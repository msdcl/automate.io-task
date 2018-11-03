let constants = require('./constants')
var request = require('request');
let getDefinition = (word) => {
    var options = {
        url: `${constants.baseUrl}/entries/en/${word}`,
        headers: {
            'app_id': constants.apiId,
            'app_key': constants.apiKey
        }
    };
    // Return new promise 
    return new Promise(function (resolve, reject) {
        // Do async job
        request.get(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
               // console.log(resp.statusCode)
                if(resp.statusCode==404){
                    console.log("Oops! Word does not exist")
                }else{
                   let obj = JSON.parse(body)

                //  console.log(obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
                let definition = obj.results[0].lexicalEntries[0].entries[0].senses;
                let arr = []
                for (let i in definition) {
                    arr.push(definition[i].definitions)
                }
               resolve(arr)
                }
               

            }
        })
    })
}

let getSynonyms = (word) => {
    var options = {
        url: `${constants.baseUrl}/entries/en/${word}/synonyms`,
        headers: {
            'app_id': constants.apiId,
            'app_key': constants.apiKey
        }
    };
    // Return new promise 
    return new Promise(function (resolve, reject) {
        // Do async job
        request.get(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {

                if(resp.statusCode==404){
                    console.log("Oops! Word does not exist")
                }else{
                let obj = JSON.parse(body)

                // console.log(obj)
                let synonyms = obj.results[0].lexicalEntries[0].entries[0].senses[0].synonyms
                let arr = []
                for (let i in synonyms) {
                    arr.push(synonyms[i].text)
                }
                resolve(arr)
            }

            }
        })
    })
}

let getAntonyms = (word) => {
    var options = {
        url: `${constants.baseUrl}/entries/en/${word}/antonyms`,
        headers: {
            'app_id': constants.apiId,
            'app_key': constants.apiKey
        }
    };
    // Return new promise 
    return new Promise(function (resolve, reject) {
        // Do async job
        request.get(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {

                if(resp.statusCode==404){
                    console.log("Oops! Word does not exist")
                }else{
                let obj = JSON.parse(body)

                //  console.log(obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
                let antonyms = obj.results[0].lexicalEntries[0].entries[0].senses[0].antonyms;
                let arr = []
                for (let i in antonyms) {
                    arr.push(antonyms[i].text)
                }
                resolve(arr)
            }
            }
        })
    })
}

let getExamples = (word) => {
    var options = {
        url: `${constants.baseUrl}/entries/en/${word}`,
        headers: {
            'app_id': constants.apiId,
            'app_key': constants.apiKey
        }
    };
    // Return new promise 
    return new Promise(function (resolve, reject) {
        // Do async job
        request.get(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                if(resp.statusCode==404){
                    console.log("Oops! Word does not exist")
                }else{
                let obj = JSON.parse(body)

                //  console.log(obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
                let examples = obj.results[0].lexicalEntries[0].entries[0].senses;
                resolve(examples)
                }
            }
        })
    })
}

let getAllInfoOfWord = (word) => {

    let definition= getDefinition(word)
    let synonyms=getSynonyms(word)
    let antonyms=  getAntonyms(word)
 
 return  Promise.all([definition,synonyms, antonyms])

    
}

let getInfoOfWordOfDay = (word) => {
    var options = {
        url: `${constants.baseUrl}/entries/en/${word}`,
        headers: {
            'app_id': constants.apiId,
            'app_key': constants.apiKey
        }
    };
    // Return new promise 
    return new Promise(function (resolve, reject) {
        // Do async job
        request.get(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                if(resp.statusCode==404){
                    console.log("Oops! Word does not exist")
                }else{
                console.log(body)
                // let obj = JSON.parse(body)
               
                //  console.log(obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
                // let definition = obj.results[0].lexicalEntries[0].entries[0].senses;
                // resolve(definition)
                }
            }
        })
    })
}
module.exports = {
    getDefinition: getDefinition,
    getExamples: getExamples,
    getSynonyms: getSynonyms,
    getAntonyms: getAntonyms,
    getAllInfoOfWord:getAllInfoOfWord
}