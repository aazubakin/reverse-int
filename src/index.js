module.exports = function reverse(n) {
    let str = String(Math.abs(n));
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(module.exports(154));
