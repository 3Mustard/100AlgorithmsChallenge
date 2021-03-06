function alternatingSums(a: number[]): number[] {
    const teamOne: number[] = [];
    const teamTwo: number[] = [];

    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            teamOne.push(a[i]);
        } else {
            teamTwo.push(a[i]);
        }
    }

    const weights: number[] = [addWeights(teamOne), addWeights(teamTwo)];

    return weights;
}

function addWeights(team: number[]): number {
    const addedWeights: number = team.reduce((accum,currentValue) => {
        return accum + currentValue;
    })

    return addedWeights;
}

// console.log(alternatingSums([50, 60, 60, 45, 70]))