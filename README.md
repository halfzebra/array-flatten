### Array flatten implementations in JavaScript

[![Build Status](https://travis-ci.org/halfzebra/array-flatten.svg?branch=master)](https://travis-ci.org/halfzebra/array-flatten)

This repository is dedicated to different implementations
of array flatten in ES2015.

The motivation is to explore the differences between imperative
ant functional ways to implement array flattening algorithms.

Currently you might check out the following implementations:
- [for] [for] loop
- [Array.prototype.forEach] [forEach]
- [Array.prototype.map] [map]
- [Array.prototype.reduce] [reduce]

#### To run tests:

```sh
$ npm i
$ npm test
```

#### Checking test coverage:

It is possible to check test covarega with [isparta](https://github.com/douglasduteil/isparta)

```sh
$ npm run coverage
```

#### Todo:
- while loop

[for]: <https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for>
[forEach]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>
[map]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>
[reduce]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>
