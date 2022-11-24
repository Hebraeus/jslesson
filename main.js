let a = 228;
let b = '100500';
let c = false;

if (b == 100500 || b === 100500 || a > 100500) {
	alert('Да, это наше число');
}

if (b == 100500 && a > 0 && c == false) {
	alert('То, что нам нужно');
}

if ((c && b == 100500) || a > 227) {
	alert('Условие верно');
}

if (c !== true || (b === 100500 && c)) {
	alert('Правда');
}

// дз возвезение в степень

function count(start, end, step, reverse = 0) {
	if (reverse === 0) {
		if (start < end) {
			for(let i = start; i < end; i+=step){			
				console.log(i)
				if (i > 1000 || i < -1000) {
					break;
				}
			}
		}	else {
			for(let i = start; i > end; i-=step){			
				console.log(i)
				if (i > 1000 || i < -1000) {
					break;
				}
			}
		}
			
	} else {
		if (end > start) {
			for(let i = end; i > start; i-=step){
				console.log(i)
				if (i > 1000 || i < -1000) {
					break;
				}
			}
		} else {
			for(let i = end; i < start; i+=step){
				console.log(i)
				if (i > 1000 || i < -1000) {
					break;
				}
			}
		}	
	}
}

count(1, -10, 2, 1);



function calcExp(number, exponent) {
	let result = number**exponent;
	console.log(result);
}

calcExp(2, 3);


function calcExponent(number, exponent) {
	let a = number;	
	for (let i = 0; i < exponent - 1; i++) {		
		a*=number;		
	}
	console.log(a);
}

calcExponent (2, 4);
