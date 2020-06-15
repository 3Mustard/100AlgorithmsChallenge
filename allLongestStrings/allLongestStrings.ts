function allLongestStrings(inputArray: string[]): string[] {
    let stringLength = inputArray[0].length;

    for (let i = 1; i < inputArray.length; i++) {
        stringLength = inputArray[i].length > stringLength ? inputArray[i].length : stringLength;
    }
    return inputArray.filter((word: string): boolean => word.length === stringLength);
}

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));