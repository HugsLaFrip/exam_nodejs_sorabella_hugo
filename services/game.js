/**
 * Imports
 */

/**
 * Exports
 */
export const getDiceResults = (numberOfDice, diceMaxValue) => {
    const results = [];

    while (results.length < numberOfDice) {
        results.push(Math.floor(Math.random() * diceMaxValue + 1));
    }

    return results;
}

export const yamsResult = diceResults => {
    const pair = [];

    for (let i = 0; i < diceResults.length; i++) {
        const actualValue = diceResults[i];
        let isSame = 0;

        for (let j = i + 1; j < diceResults.length; j++) {
            if (diceResults[j] == actualValue) isSame++;
        }

        switch (isSame) {
            case 0:
                break;
            case 1:
                if (!pair.includes(actualValue)) pair.push(actualValue);
                break;
            case 2:
                if (!pair.includes(actualValue)) pair.push(actualValue);
                break;
            case 3:
                return { winType: 'Carré', bakeryWon: 2 };
            case 4:
                return { winType: 'Yams !', bakeryWon: 3 };
        }
    }

    if (pair.length == 2) return { winType: 'Double pair', bakeryWon: 1 };

    return { winType: false, bakeryWon: 0 };
}