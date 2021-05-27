// Naive // brust force
//Q: [1,2,3,6]  sum = 8 
// [1,2,5,9] sum = 8 
// find pairs that has sum 
function hasPairWithSum(arr,sum){
    var len = arr.length
    for(var i =0; i < len -1; i++){
        for(var j = i+1; j < len; j++){
            if (arr[i] + arr[j] === sum)
            return true
        }
    } 
    return false
}

// Better 
function hasPairWithSum2(arr,sum) {
    const mySet = new Set()
    const len = arr.length
    for(let i = 0; i < len; i++){
        if(mySet.has(arr[i])){
            return true
        } 
        mySet.add(sum - arr[i])
    }
    return false
}

hasPairWithSum2  