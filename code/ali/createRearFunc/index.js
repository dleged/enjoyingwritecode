function createRearFunc(func, indexes) {
    return function (...args) {
        var result = [];
        function swap() {
            indexes.forEach(function (v, index) {
                result.push(args[index]);
            });
        }
        swap();
        // 涉及到 this 相关可以使用 call 或者 apply
        return func.apply(void 0, result);
    };
}
