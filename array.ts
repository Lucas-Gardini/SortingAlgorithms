import { bubbleSort } from "./BubbleSort";
import { insertionSort } from "./InsertionSort";
import { selectionSort } from "./SelectionSort";
import { shellSort } from "./ShellSort";
import mergeSort from "./MergeSort";
import quickSort from "./QuickSort";
import { heapSort } from "./HeapSort";

const array = [5, 3, 2, 4, 7, 1, 0, 6];
bubbleSort([...array]);
insertionSort([...array]);
selectionSort([...array]);
shellSort([...array]);
mergeSort([...array]);
quickSort([...array]);
heapSort([...array]);
