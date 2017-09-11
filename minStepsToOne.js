var myName = "saif";
var memo = [];
function getMinSteps(n) {
    if (memo.length < n) {
        for (var i = memo.length; i < n; i++) {
            memo.push(-1);
        }
    }
    if (n == 1) {
        return 0;
    }
    else if (memo[n] && memo[n] != -1) {
        return memo[n];
    }
    else {
        var r = 1 + getMinSteps(n - 1);
        if (n % 2 == 0) {
            r = Math.min(r, 1 + getMinSteps(n / 2));
        }
        if (n % 3 == 0) {
            r = Math.min(r, 1 + getMinSteps(n / 3));
        }
        memo[n] = r;
        return r;
    }
}
function main() {
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter a number: ', function (number) {
        console.log('result: ' + getMinSteps(number));
        rl.close();
    });
}
//# sourceMappingURL=minStepsToOne.js.map