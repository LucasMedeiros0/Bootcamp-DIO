/*function Compare_os_Numeros(n1, n2){
    const SaoIguais = n1 === n2;
    const soma = n1 + n2;

    if(SaoIguais)  {
      return 'São iguais';
    } 

    return 'Não são iguais';
}

    return SaoIguais ? 'São iguais' : 'Não são iguais';
*/
function compararOsNumeros(n1, n2) {
	const primeiraFrase = PrimeiraFrase(n1, n2);
	const segundaFrase = SegundaFrase(n1, n2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function PrimeiraFrase(n1, n2) {
	let primeiraFrase = `Os números ${n1} e ${n2}`;
	let simNao = 'não';

	if (n1 === n2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function SegundaFrase(n1, n2) {
	const soma = n1 + n2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(compararOsNumeros(4, 3));