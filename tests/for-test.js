var expect = require('expect');
var flatten = require('../flatten-imperative-for');

var input = [ 1, [ 2, [ 3, [ 4 ] ] ],
  [ 5 ]
];

var expectedOutput = [ 1, 2, 3, 4, 5 ];
var output = flatten(input);

expect(output).toEqual(expectedOutput);

console.log('Assertion have passed!');
