import expect from 'expect'
import flattenReduce from './src/reduce'
import flattenMap from './src/map'

const input = [
  [ 1, 2, 3, 4, 5, 6, 8 ],
  [ 7, 7, [ 0, 9, 9, 9 ] ]
]

const expected = [ 1, 2, 3, 4, 5, 6, 8, 7, 7, 0, 9, 9, 9 ];

const flattenReduceOutput = flattenReduce(input)
const flattenMapOutput = flattenMap(input)

expect(flattenReduceOutput).toEqual(expected)

console.log('flatten with Array.prototype.reduce works as expected!')

expect(flattenMapOutput).toEqual(expected)

console.log('flatten with Array.prototype.map works as expected!')