var INT_MAX = 2000000000;
function smallest(choco) {
    var N = choco.length;
    var smallest = INT_MAX;
    var i;
    for (i = 0; i < N; i++) {
        if (choco[i] < smallest) {
            smallest = choco[i];
        }
    }
    return smallest;
}
function coinChange(N) {
    var x = 0;
    if (N >= 5) {
        x = Math.floor(N / 5);
        N = N % 5;
    }
    if (N >= 2) {
        x += Math.floor(N / 2);
        N = N % 2;
    }
    x += N;
    return x;
}
function solve(N, choco) {
    var min = smallest(choco);
    var minMinusOne = min - 1;
    var minMinusTwo = min - 2;
    var minMinusThree = min - 3;
    var minMinusFour = min - 4;
    var stepsToMin = 0;
    var stepsToMinMinusOne = 0;
    var stepsToMinMinusTwo = 0;
    var stepsToMinMinusThree = 0;
    var stepsToMinMinusFour = 0;
    choco.forEach(function (employee) {
        stepsToMin += coinChange(employee - min);
        stepsToMinMinusOne += coinChange(employee - minMinusOne);
        stepsToMinMinusTwo += coinChange(employee - minMinusTwo);
        stepsToMinMinusThree += coinChange(employee - minMinusThree);
        stepsToMinMinusFour += coinChange(employee - minMinusFour);
    });
    return [stepsToMin, stepsToMinMinusOne, stepsToMinMinusTwo, stepsToMinMinusThree, stepsToMinMinusFour];
}
//# sourceMappingURL=equal.js.map