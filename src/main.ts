function isFibonacci(num: number) {
    let a: number = 0;
    let b: number = 1;
    let c: number = a + b;
    let sum: number = c;

    function loop(start: number, end: number, callBack: any): any {
        if (start < end) {
            callBack(start);
            return loop(start + 1, end, callBack);
        }
    }


    loop(0, num, function (index: number) {
        console.log(c)
        sum += c;
        a = b;
        b = c;
        c = a + b;
    })
    console.log("Sum: " + sum);
}

isFibonacci(15)
