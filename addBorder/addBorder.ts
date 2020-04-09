function addBorder(picture: string[]): string[] {
    const topBotLength: number = picture[0].length + 2;

    return ["*".repeat(topBotLength), "*" + picture[0] + "*", "*" + picture[1] + "*", "*".repeat(topBotLength)];
}

// console.log(addBorder(["abc", "ded"]));