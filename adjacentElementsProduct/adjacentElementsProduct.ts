function adjacentElementsProduct(inputArray: number[]): number {
    let largestProduct: number = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        const testProduct: number = inputArray[i] * inputArray[i + 1];
        largestProduct = testProduct > largestProduct ? testProduct : largestProduct;
    }
    return largestProduct;
}

//  console.log(adjacentElementsProduct([1, 6, 1, 1, 7, 3]));