const alunos = [
	{
		nome: 'Pedro',
		nota: 5,
		turma: '3B',
	},
	{
		nome: 'Fernando',
		nota: 6,
		turma: '1B',
	},
	{
		nome: 'Kelly',
		nota: 8,
		turma: '3C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));