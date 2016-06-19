export default function flatten (input) {

  let result = [];

  input.forEach(function (value) {
    if (Array.isArray(value) === true) {
      let arr = flatten(value);
      arr.forEach(function (temp) {
        result.push(temp);
      })
    } else {
      result.push(value);
    }
  });

  return result;
};
