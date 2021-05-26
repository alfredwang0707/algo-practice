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

containsCommonItem()
//0(a * b)
//

