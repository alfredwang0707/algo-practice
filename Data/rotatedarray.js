// Search a Rotated Array
// Search for a given number in a sorted array that has been rotated by some arbitrary number.
let binarySearchRotated = function(arr, key) {
    //TODO: Write - Your - Code
    return -1;
};

// Solution 1: recursive #

  let binarySearch = function(arr, start, end, key) {
    // assuming all the keys are unique.
    if (start > end) {
      return -1;
    }
  
    let mid = start + Math.floor((end - start) / 2);
  
    if (arr[mid] === key) {
      return mid;
    }
  
    if (arr[start] <= arr[mid] && key <= arr[mid] && key >= arr[start]) {
      return binarySearch(arr, start, mid - 1, key);
    } 
    
    else if (arr[mid] <= arr[end] && key >= arr[mid] && key <= arr[end]) {
      return binarySearch(arr, mid + 1, end, key);
    } 
    
    else if (arr[end] <= arr[mid]) {
      return binarySearch(arr, mid + 1, end, key);
    } 
    
    else if (arr[start] >= arr[mid]) {
      return binarySearch(arr, start, mid - 1, key);
    } 
    
    return -1;
  };
  
  let binarySearchRotated = function(arr, key) {
    return binarySearch(arr, 0, arr.length - 1, key);
  };
  
  let v1 = [6, 7, 1, 2, 3, 4, 5];  
  console.log("Key(3) found at: " + binarySearchRotated(v1, 3));
  console.log("Key(6) found at: " + binarySearchRotated(v1, 6));
      
  let v2 = [4, 5, 6, 1, 2, 3];
  console.log("Key(3) found at: " + binarySearchRotated(v2, 3));
  console.log("Key(6) found at: " + binarySearchRotated(v2, 6));  

  /* solution 2 iterative */

  let binarySearchRotated = function(arr, key) {

    start = 0;
    end = arr.length - 1;
  
    if (start > end){
      return -1;
    }
  
    while (start <= end){
      mid = start + Math.floor((end - start) / 2);
  
      if (arr[mid] == key){
        return mid;
      }
  
      if (arr[start] <= arr[mid] && key <= arr[mid] && key >= arr[start]){
        end = mid - 1;
      }
      
      else if (arr[mid] <= arr[end] && key >= arr[mid] && key <= arr[end]){
        start = mid + 1;
      }
  
      else if (arr[end] <= arr[mid]){
        start = mid + 1;
      }
  
      else if (arr[start] >= arr[mid]){
        end = mid - 1;
      }
      
      else{
        return -1;
      }
    }
    return -1;
  };
  
  let v1 = [6, 7, 1, 2, 3, 4, 5];
    
  console.log("Key(3) found at: " + binarySearchRotated(v1, 3));
  console.log("Key(6) found at: " + binarySearchRotated(v1, 6));
      
  let v2 = [4, 5, 6, 1, 2, 3];
    
  console.log("Key(3) found at: " + binarySearchRotated(v2, 3));
  console.log("Key(6) found at: " + binarySearchRotated(v2, 6));  