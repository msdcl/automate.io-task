let constants= require('./constants')
var request = require('request');
let getDefinition = (word)=>{
    var options = {
        url: `${constants.baseUrl}/entries/en/${word}`,
        headers: {
            'app_id': constants.apiId,
            'app_key':constants.apiKey
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
     // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                let obj = JSON.parse(body)
              
              //  console.log(obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
              let definition = obj.results[0].lexicalEntries[0].entries[0].senses;
              resolve(definition)

            }
        })
    })
}

let getSynonyms = (word)=>{
    var options = {
        url: `${constants.baseUrl}/entries/en/${word}`,
        headers: {
            'app_id': constants.apiId,
            'app_key':constants.apiKey
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
     // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                let obj = JSON.parse(body)
              
              //  console.log(obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
              let definition = obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
              resolve(definition)

            }
        })
    })
}

let getAntonyms = (word)=>{
    var options = {
        url: `${constants.baseUrl}/entries/en/${word}`,
        headers: {
            'app_id': constants.apiId,
            'app_key':constants.apiKey
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
     // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                let obj = JSON.parse(body)
              
              //  console.log(obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
              let definition = obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
              resolve(definition)

            }
        })
    })
}

let getExamples = (word)=>{
    var options = {
        url: `${constants.baseUrl}/entries/en/${word}`,
        headers: {
            'app_id': constants.apiId,
            'app_key':constants.apiKey
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
     // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                let obj = JSON.parse(body)
              
              //  console.log(obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
              let examples = obj.results[0].lexicalEntries[0].entries[0].senses;
              resolve(examples)

            }
        })
    })
}

let getAllInfoOfWord = (word)=>{
    var options = {
        url: `${constants.baseUrl}/entries/en/${word}`,
        headers: {
            'app_id': constants.apiId,
            'app_key':constants.apiKey
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
     // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                let obj = JSON.parse(body)
              
              //  console.log(obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
              let definition = obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
              resolve(definition)

            }
        })
    })
}

let getInfoOfWordOfDay = (word)=>{
    var options = {
        url: `${constants.baseUrl}/entries/en/${word}`,
        headers: {
            'app_id': constants.apiId,
            'app_key':constants.apiKey
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
     // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                let obj = JSON.parse(body)
              
              //  console.log(obj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
              let definition = obj.results[0].lexicalEntries[0].entries[0].senses;
              resolve(definition)

            }
        })
    })
}
module.exports = {
    getDefinition:getDefinition,
    getExamples:getExamples
}