export default function flatten (input) {
    var result = [];
    input.map(function recurs (n) {
        if (Array.isArray(n)) {
            result.concat(n.map(recurs))
        } else {
            result.push(n)
        }
    });
    return result;
};


