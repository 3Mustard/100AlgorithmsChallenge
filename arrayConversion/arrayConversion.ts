function arrayConversion(inputArray: number[]): number {
    
}

function oddIteration(inputArray: number[]): number[] {
    const result: number[] = [];
    for ( let i = 0; i < inputArray.length && inputArray.length >= 2; i += 2 ) {
        result.push(inputArray[i] + inputArray[i + 1]);
    }
    return result;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(oddIteration([1, 2, 3, 4, 5, 6, 7, 8]));
