const strings = ['a','b','c','d']
            //   0    1    2   3  
// const strings = ['x','a','b','c','d']
            //       0   1   2   3   4  5
            //when unshift, indexes moved 

// 4 shells to store
// 4 items for 4 shells
// 4 * 4 16bytes of storage

strings[2]

// push 
strings.push('e') // O(1)
console.log(strings);

// pop
strings.pop() // O(1)
console.log(strings);

// unshift 
strings.unshift('x') //O(n)

// splice
strings.splice(2,0, 'alien')  //O(n)

 
//  C ++ Allocated memory
// int a[20]  // create array with 20 items
// int b [5] { 1,2,3,4,5}




