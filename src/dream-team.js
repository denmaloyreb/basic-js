const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

    let member;
    let resultArr = [];
    let resultTeam = '';


    for (i = 0; i < members.length; i++) {


        if (typeof(members[i]) === 'string') {
            member = members[i];
            resultArr.push(member[0]);
        }



    }
    resultArr = resultArr.sort();
    resultTeam = resultArr.join('');

    return (resultTeam);
};