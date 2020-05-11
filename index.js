// Code your solutions in this file
function countDown(no) {
    while (no >= 0) {
        console.log(no)
        no -= 1;
    }
}

function writeCards(namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}