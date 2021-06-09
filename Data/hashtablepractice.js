add(key, value) {
    const hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) {
       this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
       this.length++;
    }
    this.values[hash][key] = value;
  }


  class HashTable {
    constructor() {
      this.values = {};
      this.length =  0;
      this.size =  0;
    }
  
    calculateHash(key) {
      return key.toString().length % this.size;
    }
  
    add(key, value) {
      const hash = this.calculateHash(key);
      If (!this.values.hasOwnProperty(hash)) {
        this.values[hash] = {};
      }
      if (!this.values[hash].hasOwnProperty(key)) {
         this.length++;
      }
      this.values[hash][key] = value;
    }
  
    search(key) {
       const hash = this.calculateHash(key);
       if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
         return this.values[hash][key];
       } else {
         return null;
       }
    }
  }
  
  //create object of type hash table
  const ht = new HashTable();
  //add data to the hash table ht
  ht.add("Canada", "300");
  ht.add("Germany", "100");
  ht.add("Italy", "50");
  
  //search
  console.log(ht.search("Italy"));
/* ************************ */
class HashEntry{
    constructor(key, data){
        this.key = key;
        // data to be stored
        this.value = data;
        // reference to new entry
        this.next = null;
    }
}
        
let entry = new HashEntry(3, "Educative");
console.log (String(entry.key) + ", " + entry.value);
/*  hash table variations from educative .io*/
// The next thing to learn are common interview questions for hash tables, so you can see how to implement operations and map a hash table. Some of these include:

// Implement insertion, delete, and search
// Check if arrays are disjointed
// Find symmetric pair in an array
// Find two pairs such that a+b = c+da+b=c+d
// Find two numbers that add up to “value”
// Remove duplicates from a Linked List using hash tables
// How to insert a new value to a hash key that is already occupied
// and more