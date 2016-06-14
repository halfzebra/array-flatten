module.exports = function flatten (input) {

  var result = [];

  input.forEach(function (element) {
    if (Array.isArray(element) === true) {
      var arr = flatten(element);
      arr.forEach(function (temp) {
        result.push(temp);
      })
    } else {
      result.push(element);
    }
  });

  return result;
};
