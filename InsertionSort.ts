export function insertionSort(vetor: Array<number>) {
	console.log("Insertion Sort");

	const n = vetor.length;

	for (let i = 1; i < n; i++) {
		const key = vetor[i];
		let j = i - 1;

		while (j >= 0 && vetor[j] > key) {
			vetor[j + 1] = vetor[j];
			j = j - 1;
		}

		vetor[j + 1] = key;
	}

	console.log(vetor);
}
