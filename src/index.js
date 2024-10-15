module.exports = function reverse (n) {
    let numberString = (Math.abs(n)).toString();
    return + (numberString.split('').reverse().join(''));
}
