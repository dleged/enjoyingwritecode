(function () {
    let fibonacci;
    fibonacci = [1, 1, 2, 3, 5, 8];
    let fibonacci2;
    fibonacci2 = [1, 1, 2, 3, 5, 8];
    let fibonacci3;
    fibonacci3 = ['1', 1, 2, 3, 5, {}];
    function sum(a, ...items) {
        let args = arguments;
        console.log(args);
    }
    sum(1, 2, 3, 4);
}());
//# sourceMappingURL=arrayType.js.map