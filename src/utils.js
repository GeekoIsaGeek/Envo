export const capitalize = (str) => {
	// capitalize only if the str is comprised of Latin chars
	if (!str?.match(/[a-zA-Z]/g)) {
		return str;
	}
	return str.replace(str[0], str[0].toUpperCase());
};

export const decomposeString = (str) => {
	if (str) {
		if (str.includes(',,')) {
			return str.split(',,');
		}
	}
	return;
};

export const stringify = (str) => {
	if (Array.isArray(str)) {
		return str.join(',,');
	} else {
		return str;
	}
};

export const getListItems = (str) => {
	if (Array.isArray(str)) {
		return str.map((elem, i) => {
			return <li key={i}>{capitalize(elem.trim())}</li>;
		});
	}
	return capitalize(str?.trim());
};

export const returnNExpressions = (array, n) => {
	if (array.length > n) {
		let expressions = [];
		for (let i = 0; i < n; i++) {
			expressions.push(array[i]);
		}
		return expressions;
	}
	return array;
};

export const sortByDateAdded = (arr, arg) => {
	if (arg === 'Oldest') {
		return arr.sort((a, b) => a.date_added - b.date_added);
	} else {
		return arr.sort((a, b) => b.date_added - a.date_added);
	}
};
