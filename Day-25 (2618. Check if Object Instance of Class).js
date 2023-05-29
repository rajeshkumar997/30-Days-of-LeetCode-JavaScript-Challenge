/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    // if(obj === null || obj === undefined || typeof classFunction !== 'function')
    //     return false;
    // return Object(obj) instanceof classFunction;
    
                  // or //
                  
    while(obj != null){
        if(obj.constructor === classFunction){
            return true;
        }
        obj = Object.getPrototypeOf(obj);
    }
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
