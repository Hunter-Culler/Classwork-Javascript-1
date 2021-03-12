function factorize(n) {
    var factors = [];
    for (var i = 0; i <= n; i++) {
        if (n % i == 0) {
            factors.push(i);
        }
    }
    return factors;
}

function findUnique(str) {
    var uniqueStr = "";
    for (var i=0; i < str.length; i++) {
        if(uniqueStr.indexOf(str.charAt(i)) == -1) {
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}

function doOperation(a, b, operator) {
    return operator(a, b);
}

function multiply(a, b) {
    return a * b;
}

function power(a, b) {
    return Math.pow(a, b);
}