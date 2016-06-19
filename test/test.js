import chai from 'chai'
import flattenReduce from '../src/reduce'
import flattenMap from '../src/map'
import flattenFor from '../src/for'
import flattenForEach from '../src/foreach'

chai.should()

describe('Flatten function tests', () => {

  const input = [
    [ 1, 2, 3, 4, 5, 6, 8 ],
    [ 7, 7, [ 0, 9, 9, 9 ] ]
  ]

  const expected = [ 1, 2, 3, 4, 5, 6, 8, 7, 7, 0, 9, 9, 9 ];

  describe('Using Array.prototype.reduce', () => {

    it('Module exports a function', () => {
      flattenReduce.should.be.a('function')
    });

    it('Flatten with reduce produces expected output', () => {
      flattenReduce(input).should.be.deep.equal(expected)
    });
  })

  describe('Using Array.prototype.map', () => {

    it('Module exports a function', () => {
      flattenMap.should.be.a('function')
    });

    it('Flatten with map produces expected output', () => {
      flattenMap(input).should.be.deep.equal(expected)
    });
  })

  describe('Using for loop', () => {

    it('Module exports a function', () => {
      flattenFor.should.be.a('function')
    });

    it('Flatten with map produces expected output', () => {
      flattenFor(input).should.be.deep.equal(expected)
    });
  })

  describe('Using Array.prototype.forEach', () => {

    it('Module exports a function', () => {
      flattenForEach.should.be.a('function')
    });

    it('Flatten with map produces expected output', () => {
      flattenForEach(input).should.be.deep.equal(expected)
    });
  })
})