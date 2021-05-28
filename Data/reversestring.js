// Create a function that reverses a strintg
// 'Hi My name is Andrei' should be :
// 'ierdnA si eman yM iH;

function reverse(str){
 if(!str || str.length < 2 || typeof str !== 'string'){
     return ' hmm that is not good'    
 }
    
 const backwards = []
 const totalItems = str.length - 1 
 for(let i = totalItems; i >= 0;i--){
     // from the length of string, all the way back, insert into array 1 by 1
    backwards.push(str[i])
 }
 return backwards.join('')
}


function reverse2(str){
    return str.split('').reverse().join('')
}


const reverse3 = str => str.split('').reverse(.join(''))

const reverse4 = str => [...str].reverse().join('')