/*
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
*/

function camelize(str){
    let arr = str.split("-");
    let out=arr[0];
    for(let i = 1; i<arr.length; i++){
        let aux = arr[i].slice(1,arr[i].length);
        let auxLetter = arr[i].charAt(0).toUpperCase();
        out = out + auxLetter + aux;
    }
    
    console.log(out)
    
}

camelize("background-color");