// Code your solutions in this file
const names = ["Joey", "Pelham", "Tim", "James"];

function writeCards(names, eventName) {
  let messageArray = [];
  for (let i = 0; i < names.length; i++) {
   messageArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return messageArray
}

function countDown(number) {
  while (number > 0) {
    console.log(number);
    number -= 1;
  }
  console.log(number)
}