export function heapSort(vetor: Array<number>) {
	console.log("Heap Sort");

	const n = vetor.length;

	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(vetor, n, i);
	}

	for (let i = n - 1; i >= 0; i--) {
		const temp = vetor[0];
		vetor[0] = vetor[i];
		vetor[i] = temp;

		heapify(vetor, i, 0);
	}

	console.log(vetor);
}

function heapify(vetor: Array<number>, n: number, i: number) {
	let maior = i;
	const esq = 2 * i + 1;
	const dir = 2 * i + 2;

	if (esq < n && vetor[esq] > vetor[maior]) {
		maior = esq;
	}

	if (dir < n && vetor[dir] > vetor[maior]) {
		maior = dir;
	}

	if (maior !== i) {
		const temp = vetor[i];
		vetor[i] = vetor[maior];
		vetor[maior] = temp;

		heapify(vetor, n, maior);
	}
}
