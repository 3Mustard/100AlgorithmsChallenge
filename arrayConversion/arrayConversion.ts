function arrayConversion(inputArray: number[]): number {
    let iterationCount: number = 1;

    while ( inputArray.length > 1 ) {
        const action: string = iterationCount % 2 === 0 ? 'EVEN_ITERATION' : 'ODD_ITERATION';
        inputArray = iterationAction(inputArray, action);
        iterationCount++;
    }
    return inputArray[0];
}

function iterationAction(inputArray: number[], action: string): number[] {
    const result: number[] = [];

    for ( let i = 0; i < inputArray.length; i += 2 ) {
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

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(iterationAction([1, 2, 3, 4, 5, 6, 7, 8], 'EVEN_ITERATION'));
// console.log(iterationAction([1, 2, 3, 4, 5, 6, 7, 8], 'ODD_ITERATION'));
