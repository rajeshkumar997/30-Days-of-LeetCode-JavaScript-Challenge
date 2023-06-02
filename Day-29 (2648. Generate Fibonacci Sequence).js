/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    // let current = 0;
    // let next = 1;
    // while(true){
    //     yield current;
    //     [current, next] = [next, current+next];
    // }

    let a =0, b= 1;
    while(true){
        yield a;
        b = a + b;
        a = b - a;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
