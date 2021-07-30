// probme 2 a)
describe("filter", function () {
    it("takes an array of strings and filters a string removing those strings from array from the string",
        function () {
            assert.equal("This house is nice!", "This house is not nice!".filter('not'));
        });
});

// problem 2 b)
describe("bubbleSort", function () {
    it("sorts an array of numbers",
        function () {
            assert.deepEqual([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort());
        });
});