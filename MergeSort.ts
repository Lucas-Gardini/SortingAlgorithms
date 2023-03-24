function mergeSort(vetor: Array<number>) {
	const n = vetor.length;

	if (n < 2) {
		return;
	}

	const meio = Math.floor(n / 2);

	const vetorEsquerdo = vetor.slice(0, meio);
	const vetorDireito = vetor.slice(meio, n);

	mergeSort(vetorEsquerdo);
	mergeSort(vetorDireito);

	merge(vetor, vetorEsquerdo, vetorDireito);
}

function merge(vetor: Array<number>, vetorEsquerdo: Array<number>, vetorDireito: Array<number>) {
	let i = 0;
	let j = 0;
	let k = 0;

	while (i < vetorEsquerdo.length && j < vetorDireito.length) {
		if (vetorEsquerdo[i] <= vetorDireito[j]) {
			vetor[k] = vetorEsquerdo[i];
			i++;
		} else {
			vetor[k] = vetorDireito[j];
			j++;
		}

		k++;
	}

	while (i < vetorEsquerdo.length) {
		vetor[k] = vetorEsquerdo[i];
		i++;
		k++;
	}

	while (j < vetorDireito.length) {
		vetor[k] = vetorDireito[j];
		j++;
		k++;
	}
}

export default function start(vetor: Array<number>) {
	console.log("Merge Sort");

	mergeSort(vetor);

	console.log(vetor);
}
