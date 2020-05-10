function writeCards(arr, event) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
	}
	return result;
}

function countDown(number) {
	while (number >= 0) {
		console.log(number);
		number--;
	}
}
