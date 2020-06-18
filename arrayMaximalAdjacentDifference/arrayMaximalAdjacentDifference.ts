function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let max = 0;

    for ( let i = 0; i < inputArray.length -1; i++ ) {
        const absoluteValue = Math.abs(inputArray[i] - inputArray[i -1]);
        max = absoluteValue > max ? absoluteValue : max;
    }
    return max;
}

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));