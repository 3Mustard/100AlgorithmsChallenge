function arrayConversion(inputArray: number[]): number {
    
}

function iterationAction(inputArray: number[], action: string): number[] {
    const result: number[] = [];
    for ( let i = 0; i < inputArray.length && inputArray.length >= 2; i += 2 ) {
        switch(action) {
            case 'ODD_ITERATION':
                result.push(inputArray[i] + inputArray[i + 1]);
              break;
            case 'EVEN_ITERATION':
                result.push(inputArray[i] * inputArray[i + 1]);
              break;
          }
    }
    return result;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(iterationAction([1, 2, 3, 4, 5, 6, 7, 8], 'EVEN_ITERATION'));
