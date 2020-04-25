(function () {
    let fibonacci: number[];
    fibonacci = [1, 1, 2, 3, 5, 8];

    let fibonacci2: Array<number>;
    fibonacci2 = [1, 1, 2, 3, 5, 8];

    let fibonacci3: Array<any>;
    fibonacci3 = ['1', 1, 2, 3, 5, {}];

    function sum(a: number, ...items: any[]) {
        let args: {
            [index: number]: number;
            length: number;
            callee: Function;
        } = arguments;

        console.log(args);
    }
    sum(1, 2, 3, 4);
}());