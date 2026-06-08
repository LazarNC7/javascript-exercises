const sumAll = function(left, right) {
    let suma = 0;
    if(left>right){
        let aux = left;
        left = right;
        right = aux;
    }
    if(typeof left !== 'number' || typeof right !== 'number'){
        return 'ERROR';
    }else{
        if(left < 0 || right < 0) 
            return 'ERROR';
        if(Math.floor(left)!=left || Math.floor(right) != right)
            return 'ERROR';
    }
    for(let i=left; i<=right; i++){
        suma+=i;
    }

    return suma;
};

// Do not edit below this line
module.exports = sumAll;
