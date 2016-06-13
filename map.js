var input = [1, [2, [3, [4]]],[5]];
var expectedOutput = [1, 2, 3, 4, 5];
var output = [];
input.map(function recurs(n) {
    Array.isArray(n) ? output.concat(n.map(recurs)): output.push(n);



});

console.log(output);
