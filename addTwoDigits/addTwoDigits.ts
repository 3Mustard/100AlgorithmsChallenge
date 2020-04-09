function addTwoDigits(n: any): number {
    return n.toString().split("").reduce((x: string, y: string): number => {return parseInt(x, 10) + parseInt(y, 10);})
}

// console.log(addTwoDigits(29));