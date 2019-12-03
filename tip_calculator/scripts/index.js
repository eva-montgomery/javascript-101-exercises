// Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20%
// fair -> 15%
// bad -> 10%

function tipAmount(bill, service) {
    if (service = `good`) {
        const tip = bill * .20;
        return tip
    }
    else if (service = `fair`) {
        const tip = bill * .15;
        return tip
    }
    else if (service = `bad`) {
        const tip = bill * .10;
        return tip
    }
}
console.log(tipAmount(100, `good`));

// write a function <totalAmount> that takes the same arguments as <tipAmount> except it 
// returns the total as the tip amount plus the bill amount. 
// this function may make use of <tipAmount> as a sub-task


function totalAmount(bill, servide) {
    if (service = `good`) {
        const tip = bill * .20;
        sum = tip + bill;
        return sum;
    }
    else if (service = `fair`) {
        const tip = bill * .15;
        sum = tip + bill;
        return sum;
    }
    else if (servie = `bad`) {
        const tip = bill * .10;
        sum = tip + bill;
        return sum; 
    }
}
console.log(totalAmount(100, `good`));


// Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. 
// It will return the final amount for each person.

function splitAmount(bill, service, numPeople) {
    if (service = `good`) {
        const tip = bill * .20;
        sum = tip + bill;
        split = sum / numPeople;
        return split;
    }
    else if (servie = `fair`) {
        const tip = bill * .15;
        sum = tip + bill;
        split = sum / numPeople;
        return split;
    }
    else if (service = `bad`) {
        const tip = bill * .10;
        sum = biull + tip;
        split = sum / numPeople;
        return split
    }
}
console.log(splitAmount(100, 'good', 5));






