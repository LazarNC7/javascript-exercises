const removeFromArray = function(arr, ...num) {
    return arr.filter(elem => num.indexOf(elem) === -1);
};

// Do not edit below this line
module.exports = removeFromArray;
