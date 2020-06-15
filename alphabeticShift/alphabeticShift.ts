function alphabeticShift(inputString: string): string {
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

    return inputString.split("").map((letter: string): string => {
        if (letter === "z") {
            return "a"
        }else{
            const alphabetPosition: number = alphabet.indexOf(letter);

            return alphabet.charAt(alphabetPosition + 1);
        }
    }).join("");
}

// console.log(alphabeticShift('crazy'));