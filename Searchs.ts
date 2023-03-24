export function sequentialSearch(array: Array<number>, target: number) {
	console.log("Sequential Search");

	const n = array.length;

	for (let i = 0; i < n; i++) {
		if (array[i] === target) {
			return i;
		}
	}

	return -1;
}

export function binarySearch(array: Array<number>, target: number) {
	console.log("Binary Search");

	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);

		if (array[middle] === target) {
			return middle;
		}

		if (array[middle] < target) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return -1;
}
