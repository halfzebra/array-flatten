module.exports = function flatten (input) {


var output = [];
input.map(function recurs(n) {
    Array.isArray(n) ? output.concat(n.map(recurs)) : output.push(n);

    return output;
})};
