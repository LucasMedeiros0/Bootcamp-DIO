//1° resolução

function verificadorPalindromo(string) {
    if(!string) return; 'stringinexistente'

    return string.split('').reverse('').join('') === string
}

//2° resolução

function verificadorPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}
console.log(verificadorPalindromo2('abba'));