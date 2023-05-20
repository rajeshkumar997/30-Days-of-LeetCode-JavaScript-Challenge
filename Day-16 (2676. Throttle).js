/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let ref = null;
    let currArgs = null;
    return function helper(...args) {
        if(ref == null){
            currArgs = args;
            fn(...currArgs);
            currArgs = null;
            ref = setTimeout(() => {
                ref = null;
                if(currArgs !== null){
                    return helper(...currArgs);
                }
            }, t);
        } else {
            currArgs = args;
        }
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
