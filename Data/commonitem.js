//for exmaple
//return true

//2 params - arrays - no size limit
//return true / false

//brute force // nested loop //
const array1 = ['a','b','c','d','e']
const array2 = ['a','z','v','c']
function containsCommonItem(arr1,arr2){
    for (let i=0; i <arr1.length; i++){
        for (let j=o; j <arr2.length; j++)
        {
            if(arr1[i]=== arr2.[j])
            return true
        }
    }
    return false
}

// O (1) space complexity


//  
//0(a * b)
// array1 ==> obj{
// a: true
// b: true
// c: true
// }
// array2[index] --- obj.properties
 
function containsCommonItem2(arr1,arr2){
    // loop thru 1st array and create object where
    // properties === items in the array
    let map = {}
    for (ley i=0; i < arr1.length; i++){
        // if map.a exist, return true
        if(!map[arr1[i]]){
            const item =  arr1[i]
            map[item] = true 
            //map[a] = true
            //continue until map a,b,c, all true
            // loop thru 2nd array and check if item in 2nd arr exist on created obj 
        }
    }
    for (let j=0; j < arr2.length; j++){
        if (map[arr2[j]]){
            return true
        }
    }
    return false
} 
//O (a + b) Time Complexity
//O(A) space complexity
// faster but heavy on space



// edge cases // how can this break // ? 

// null in array ? strings? integers? 

function containsCommonItems3(arr1,arr2){
    return arr1.some(item => arr2.includes(item)
    // check 1st array if some of them include, return true/false
    // built in method in js / readibility
    //  is this clean / readable and easy to pick up ?
    // small pieces of code that does one thing
}
