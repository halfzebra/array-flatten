export default function flatten (input) {
  let result = [];
  input.map(function recurs (value) {
    if (Array.isArray(value)) {
      result.concat(value.map(recurs));
    } else {
      result.push(value);
    }
  });
  return result;
}


