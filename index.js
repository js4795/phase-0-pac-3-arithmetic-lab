var add = function(a, b) {  
    return (a += b) 
}

var subtract = function(a, b) {
    return (a -= b)
}

var multiply = function(a, b) {
    return (a *= b)
}

var divide = function(a, b) {
    return (a /= b)
}

var increment = function(a) {
    return (a += 1)
}

var decrement = function(a) {
    return (a -= 1)
}

var makeInt = function(n) {
    return parseInt(n, 10)
}

var preserveDecimal = function(n) {
    return parseFloat(n, 10)
}