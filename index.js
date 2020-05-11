// Code your solutions in this file
function writeCards(arr, type){
    let i = 0
    let returnArr = []
    while(i<arr.length){
        returnArr.push("Thank you, " + arr[i] + ", for the wonderful " + type + " gift!")
        i++
    }
    return returnArr
}

function countDown(num){
    let i = num
    while(i>=0){
        console.log(i)
        i--
    }
}