const names = ["Ada", "Brendan", "Ali"];

function writeCards(names, event){
    const card_ary = [];
    for (let i = 0; i < names.length; i++) {
        card_ary.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  };
 
  return card_ary;
}


function countDown(num){
    let countdown = num;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}