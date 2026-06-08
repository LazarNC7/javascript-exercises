const repeatString = function(string, num) {
    if(num<0)return 'ERROR';
    let aux = "";
    while(num !== 0){
        aux += string;
        num--;
    }

    return aux;
};



// Do not edit below this line
module.exports = repeatString;
