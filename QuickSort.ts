export default function quickSort(vetor: Array<number>) {
	console.log("Quick Sort");

	const n = vetor.length;

	quickSortRecursivo(vetor, 0, n - 1);

	console.log(vetor);
}

function quickSortRecursivo(vetor: Array<number>, inicio: number, fim: number) {
	if (inicio < fim) {
		const pivo = particao(vetor, inicio, fim);

		quickSortRecursivo(vetor, inicio, pivo - 1);
		quickSortRecursivo(vetor, pivo + 1, fim);
	}
}

function particao(vetor: Array<number>, inicio: number, fim: number) {
	const pivo = vetor[fim];
	let i = inicio - 1;

	for (let j = inicio; j < fim; j++) {
		if (vetor[j] <= pivo) {
			i++;
			troca(vetor, i, j);
		}
	}

	troca(vetor, i + 1, fim);

	return i + 1;
}

function troca(vetor: Array<number>, i: number, j: number) {
	const temp = vetor[i];
	vetor[i] = vetor[j];
	vetor[j] = temp;
}
