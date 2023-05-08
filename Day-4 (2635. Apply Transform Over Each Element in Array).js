/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // const value = [];
    // for(let i=0; i<arr.length; i++){
    //     const ans = fn(arr[i],i);
    //     value.push(ans);
    // }
    // return value;

    // return arr.map((val,index) => {
    //     return fn(val, index);
    // })

    for(let i=0; i<arr.length; i++){
        arr[i] = fn(arr[i], i);
    }
    return arr;
};
