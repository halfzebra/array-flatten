export default function flatten (input) {
  return input.reduce(
    (accum, value) => accum.concat(Array.isArray(value) ? flatten(value) : value),
    []
  )
}