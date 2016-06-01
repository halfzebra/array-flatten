import expect from 'expect'
import flatten from '../reduce-es6'

const input = [
  [ 1, 2, 3, 4, 5, 6, 8 ],
  [ 7, 7, [ 0, 9, 9, 9 ] ]
]

const output = flatten(input)

expect(output).toEqual([ 1, 2, 3, 4, 5, 6, 8, 7, 7, 0, 9, 9, 9 ])

console.log('Assertion have passed!')