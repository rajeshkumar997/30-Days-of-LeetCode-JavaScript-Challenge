/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // var res = init;
    // for(var i=0; i<nums.length; i++){
    //     res = fn(res, nums[i])
    // }
    // return res;

    let accumulator = init;
    nums.forEach((elem) => {
        accumulator = fn(accumulator, elem);
    })
    return accumulator;
};
