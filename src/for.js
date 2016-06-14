module.exports = function flatten (input) {
  var result = [];

  for (var i = 0; i < input.length; i++) {

    if (Array.isArray(input[ i ]) === true) {

      var arr = flatten(input[ i ]);

      for (var k = 0; k < arr.length; k++) {
        result.push(arr[ k ]);
      }

    } else {
      result.push(input[ i ]);
    }
  }

  return result;
};