/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        functions.reduceRight((total, fn) => {
            total = fn(x);
            x = total;
            console.log(total);
        }, x)
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */