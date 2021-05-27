// build an array 

class MyArray {
    constructor(){
        this.length = 0
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length ++
        return this.length
    }
    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastIitem
    }
    delete(index){
        const item = this.data[index]
        //delete the item, and shift all the index by 1
        this.shiftItems(index)
    }
    shiftItems(){
        // start at the index, iterate throu them
        // if array was [0,2]
        // make 0 > 2 
        // shifting items to the left by 1

        for(let i = index;i < this.length -1; i++){
            this.data[i] = this.data[i+1]
        }
        //with out this, it would shift, but the last index still exist
        delete this.data[this.length-1]
        this.length--
    }
}

const newArray = new MyArray()
console.log(newArray);
//MyArray {length : 0, data:{} }

console.log(newArray.get(0));
// undefine , becuz theres nothing


