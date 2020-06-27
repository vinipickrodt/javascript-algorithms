exports.qsort = function qsort(arr, esq, dir) {
	esq = esq == null ? 0 : esq;
	dir = dir == null ? arr.length - 1 : dir;

	var pivot_idx = esq;
	var pivot = arr[pivot_idx];
	var i = esq;
	var j = dir;

	while (i < pivot_idx || j > pivot_idx) {
		while (i < pivot_idx) {
			if (arr[i] > pivot) {
				swap(arr, i, pivot_idx);
				pivot_idx = i;
			}
			i++;
		}

		while (j > pivot_idx) {
			if (arr[j] < pivot) {
				swap(arr, j, pivot_idx);
				pivot_idx = j;
			}
			j--;
		}
	}

	// sort the left side o array partition (esq, dir)
	if (pivot_idx > esq) {
		qsort(arr, esq, pivot_idx - 1);
	}

	// sort the right side of array partition (esq, dir)
	if (pivot_idx < dir) {
		qsort(arr, pivot_idx + 1, dir);
	}

	return pivot_idx;
}

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}