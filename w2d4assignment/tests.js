// probme 2 a)
describe("filter", function () {
    it("takes an array of strings and filters a string removing those strings from array from the string",
        function () {
            assert.equal("This house is nice!", "This bad house is not nice!".filter('not', 'bad'));
        });
});

// problem 2 b)
describe("bubbleSort", function () {
    it("sorts an array of numbers",
        function () {
            assert.deepEqual([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort());
        });
});

// problem 2 c)
describe("teach", function () {
    it("takes a subject and returns a string saying <teacher> is now teaching <subject>",
        function () {
            var teacher = new Teacher();
            teacher.initialize("Michael Zijlstra", 40);
            assert.deepEqual("Michael Zijlstra is now teaching CS401-WAP", teacher.teach("CS401-WAP"));
        });
});
