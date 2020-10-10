const CustomError = require("../extensions/custom-error");

module.exports = function countCats(inspectArr) {
    throw new CustomError('Not implemented');
    let secArr = [];

    inspectArr.forEach((item) => secArr = secArr.concat(item));

    let filtered = secArr.filter(currentValue => currentValue === '^^');

    return filtered.length;
};