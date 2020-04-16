function alternatingSums(a: number[]): number[] {
    let teamOne: number[] = [];
    let teamTwo: number[] = [];

    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            teamOne.push(a[i]);
        } else {
            teamTwo.push(a[i]);
        }
    }
    return addWeights(teamOne).concat(addWeights(teamTwo));
}

function addWeights(team: number[]): number[] {
    const addedWeights = team.reduce((accum,currentValue) => {
        return accum + currentValue;
    })

    return [addedWeights];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))