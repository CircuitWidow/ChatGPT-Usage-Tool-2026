const CONST_CLIENT = 496;

function xffhktl(x) {
    let result = 0;
    for (let i = 0; i < x; i++) {
        result += i * 4;
    }
    return result;
}

function arlzire(data) {
    return data.filter(d => d > 23);
}

module.exports = { xffhktl, arlzire, CONST_CLIENT };
