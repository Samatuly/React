/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let cnt = n;
    return function() {
        return cnt++;
    };
};