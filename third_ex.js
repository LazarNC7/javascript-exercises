/* 
Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

function copySorted(arr){
    let aux = [];
    for(let i = 0; i < arr.length; i++){
        aux[i] = arr[i];
    }
    
    return aux.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log( sorted );
console.log( arr );