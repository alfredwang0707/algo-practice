// reference type

// [] === []    //false
// [1] === [1]  //false

var object1 = {value: 10} 
var object2 = object1
var object3 = {value: 10}
// obj 3 is a new project
//but 1 and 2 is referencing to box 1
// obj3 is it's own box

object1 === object2
// true
object1 === object3
// false
object1.value //15
object2.value //15
object3.value //10

// context vs scope
// context , where we are with the object
console.log(this)
// this, the window object
// what is the object enviroment right now
// window.alert() , .alert()
// what is to the "left" of the  "."
 

const object4 ={
    a: function(){
        console.log(this)
    }
}
 
// instantiation 
// every time create player, it has those properties
class Player {
    constructor(name, type){
        this.name = name
        this.type = type
    }
    introduce(){
        console.log(`Hi I am a ${this.name}, I'm a ${this.type}`)
    }
}


// I want wizard to extend/add on top whatever player has
class Wizard extends Player{
    constructor(name,type){
        super(name, type)
        // takes us to constructor of player
        
    }
    play(){
        console.log(` WEEEEEEE I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shan', 'Dark Magic')
// have access to  introduce and play

