const reverseString = function(string) {
    let auxArr = string.split('');
    let output = '';
    for(let i=string.length-1;i>=0;i--){
        output += auxArr[i];
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
