exports.qsort = function qsort(arr, left, right) {
	left = left == null ? 0 : left;
	right = right == null ? arr.length - 1 : right;

	var pivot_idx = left;
	var pivot = arr[pivot_idx];
	var i = left + 1;
	var j = right;

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
	if (pivot_idx > left) {
		qsort(arr, left, pivot_idx - 1);
	}

	// sort the right side of array partition (esq, dir)
	if (pivot_idx < right) {
		qsort(arr, pivot_idx + 1, right);
	}

	return pivot_idx;
}

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}