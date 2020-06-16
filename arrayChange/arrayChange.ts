function arrayChange(inputArray: number[]): number {
    let moves: number = 0;

    for ( let i = 0; i < inputArray.length; i++ ) {
        const current: number = inputArray[i];
        let next: number = inputArray[i + 1];
        if ( next !== current + 1 ) {
            moves++;
            next++;
        }
    }
    return moves;
}

// console.log(arrayChange([1, 1, 1]));