/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // return arr.filter(function(element, index) {
    // return fn(element, index);

    ////////  or /////

    return arr.filter(fn);
//   });
};
