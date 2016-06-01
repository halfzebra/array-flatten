### Array flatten implementations in JavaScript

This repository is dedicated to different implementations
of array flatten.

The motivation is to explore the differences between imperative
ant functional ways to iterate through the array.

Currently you might check out the following implementations:
-- for
-- Array.prototype.forEach
-- Array.prototype.reduce in ES2015

#### To run tests:

```sh
$ npm i
$ node_modules/.bin/babel-node tests/reduce-es6-test.js # for ES2015
$ node tests/for-test.js                                # for the rest
```

#### Todo:
-- while
-- Array.prototype.map
-- Better tests