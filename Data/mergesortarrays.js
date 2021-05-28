// .sort ab? 
function mergeSortedArrays(array1, array2){
    const mergedArray = []
    let i = 1
    let j =1
    let array1Item = array1[0]
    //grab the first item
    let array2Item = array2[0]
    // grab 2nd array index one, which is 4 
    // check input, wut if we have empty array?

    if(array1.length === 0 ){
        return array2
    }
    if (array2.length === 0){
        return array1
    }

    while(array1Item || array2Item){
        console.log(array1Item, array2Item);
        if(!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = array1[i]
            i++
        } else {
            mergedArray.push(array2Item)
            array2Item = array2Item[j]
            j++
        }
    }
    return mergedArray
}

// m ergeSortedArrays([0,3,4,31], [4,6,30])
