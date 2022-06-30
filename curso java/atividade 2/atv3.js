function Idade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Marcos',
	idade: 52,
};

const pessoa2 = {
	nome: 'Andre',
	idade: 9,
};

const pessoa3 = {
	nome: 'Pedro',
	idade: 22,
};

const animal ={
    nome: 'Tobias',
    idade: 3 + 7,
};

console.log(Idade.call(animal, 6));
console.log(Idade.apply(pessoa2, [4]));