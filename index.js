exports.random = function(weightConfigArr) {
const accmWeight = weightConfigArr.reduce((total, weight) => {
    const pctgWeight = parseFloat(weight) * 100;
    return total + pctgWeight;
    }, 0);
    let randWeight = Math.random() * accmWeight;
    let selectedWeightIndex = null;
    for (const [i, w] of weightConfigArr.entries()) {
    randWeight = randWeight - parseFloat(w) * 100;
    if (randWeight < 0) {
        selectedWeightIndex = i;
        break;
    }
    }
    return selectedWeightIndex;
}
