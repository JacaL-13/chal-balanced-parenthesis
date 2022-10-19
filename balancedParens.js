// Sample Strings
let sample1 = 'This ( is unbalanced.'
let sample2 = '(This (is (a) balanced) string.)'
let sample3 = 'This is () also ) unbalanced.'
let sample4 = 'Balanced.'
let sample5 = '())(()'

// Write your solution below:
function parenBal(str) {
	// let countOpen = str.length - str.replaceAll('(', '').length
	// let countClosed = str.length - str.replaceAll(')', '').length
	// return countOpen === countClosed
	let bal = 0
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			bal += 1
		} else if (str[i] === ')') {
			bal -= 1
			if (bal < 0) {
				return false
			}
		}
	}
	return bal === 0
}

console.log(parenBal(sample1))
console.log(parenBal(sample2))
console.log(parenBal(sample3))
console.log(parenBal(sample4))
console.log(parenBal(sample5))
