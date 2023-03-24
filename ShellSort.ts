export function shellSort(vetor: Array<number>) {
	console.log("Shell Sort");

	const n = vetor.length;

	for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
		for (let i = gap; i < n; i++) {
			const temp = vetor[i];

			let j;
			for (j = i; j >= gap && vetor[j - gap] > temp; j -= gap) {
				vetor[j] = vetor[j - gap];
			}

			vetor[j] = temp;
		}
	}

	console.log(vetor);
}
