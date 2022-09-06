function solution(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] >= '0' && inputString[i] <= '9') {
            result += inputString[i];
        } else {
            break;
        }
    }
    return result;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test longestDigitsPrefix

// alternative solution
