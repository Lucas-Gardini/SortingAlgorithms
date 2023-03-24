export function bubbleSort(vetor: Array<number>) {
	console.log("Bubble Sort");

	const n = vetor.length;

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - 1 - i; j++) {
			if (vetor[j] > vetor[j + 1]) {
				const aux = vetor[j];
				vetor[j] = vetor[j + 1];
				vetor[j + 1] = aux;
			}
		}
	}

	console.log(vetor);
}
