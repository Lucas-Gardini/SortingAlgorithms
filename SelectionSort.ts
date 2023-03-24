export function selectionSort(vetor: Array<number>) {
	console.log("Selection Sort");

	const n = vetor.length;

	for (let i = 0; i < n - 1; i++) {
		let menor = i;

		for (let j = i + 1; j < n; j++) {
			if (vetor[j] < vetor[menor]) {
				menor = j;
			}
		}

		if (menor !== i) {
			const aux = vetor[i];
			vetor[i] = vetor[menor];
			vetor[menor] = aux;
		}
	}

	console.log(vetor);
}
