export const capitalize = (str) => {
	// capitalize only if the str is comprised of Latin chars
	if (!str?.match(/[a-zA-Z]/g)) {
		return str;
	}
	return str.replace(str[0], str[0].toUpperCase());
};

export const decomposeString = (str) => {
	if (str?.trim().includes(',,')) {
		return str.split(',,');
	}
	return;
};
