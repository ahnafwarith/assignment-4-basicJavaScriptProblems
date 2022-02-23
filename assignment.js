// Problem 1: ana to vori
function anaToVori(ana) {
    //error handling
    if (typeof ana != 'number') {
        return 'Please enter the value of ana you want to convert to vori'
    }
    //main code starts
    vori = ana / 16;
    return vori;
}
// Problem 2:
function pandaCost(shingaraAmount, samosaAmount, jilapiAmount) {
    //error handling
    if (typeof shingaraAmount != 'number') {
        return 'Please enter three numbers'
    }
    else if (typeof samosaAmount != 'number') {
        return 'Please enter three numbers'
    }
    else if (typeof jilapiAmount != 'number') {
        return 'Please enter three numbers'
    }
    //main code starts
    const shingaraPrice = 7;
    const samosaPrice = 10;
    const jilapiPrice = 15;
    const totalShingaraPrice = shingaraAmount * shingaraPrice;
    const totalSamosaPrice = samosaAmount * samosaPrice;
    const totalJilapiPrice = jilapiAmount * jilapiPrice;
    const totalPrice = totalShingaraPrice + totalSamosaPrice + totalJilapiPrice;
    return totalPrice;
}
//Problem 3:
function picnicBudget(peopleAmount) {
    //error handling
    if (typeof peopleAmount != 'number') {
        return 'Please enter the number of people you want in your picnic'
    }
    //main code starts
    else if (peopleAmount < 101) {
        price = 5000;
        budget = price * peopleAmount;
        return budget;
    }
    else if (peopleAmount > 100 && peopleAmount < 201) {
        price = 4000;
        firstBudget = 5000 * 100;
        // To substract the amount that makes this condition return unwanted value
        skipForFirst = price * 100;
        secondBudget = price * peopleAmount - skipForFirst;
        budget = firstBudget + secondBudget;
        return budget;
    }
    else {
        price = 3000;
        firstBudget = 5000 * 100;
        secondBudget = 4000 * 100;
        // To substract the amount that makes this condition return unwanted value
        skipForFirstTwo = price * 200;
        thirdBugdet = price * peopleAmount - skipForFirstTwo;
        budget = firstBudget + secondBudget + thirdBugdet;
        return budget;
    }
}
//Problem 4:
function oddFriend(names) {
    //error handling
    if (typeof names == 'number' || typeof names == 'string') {
        return 'Please enter the name your friends in an array'
    }
    //main code starts
    for (let i = 0; i < names.length; i++) {
        if (names[i].length % 2 != 0) {
            return names[i];
        }
    }
}