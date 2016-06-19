export default function flatten (input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {

    if (Array.isArray(input[ i ]) === true) {

      let arr = flatten(input[ i ]);

      for (let k = 0; k < arr.length; k++) {
        result.push(arr[ k ]);
      }

    } else {
      result.push(input[ i ]);
    }
  }

  return result;
};