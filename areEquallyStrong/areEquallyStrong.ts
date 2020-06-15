function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const yourWeakest = yourLeft <= yourRight ?  yourLeft : yourRight;
    const friendStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    const friendWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;

    return ( yourStrongest === friendStrongest && yourWeakest === friendWeakest );
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
