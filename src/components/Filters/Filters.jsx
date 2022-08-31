import React from 'react';
import Toggler from './Toggler';
import styles from './Filters.module.scss';
import SortBy from './SortBy';
import Shuffle from './Shuffle';
import NumOfItems from './NumOfItems';

const Filters = () => {
	return (
		<div className={styles.Wrapper}>
			<Toggler />
			<SortBy />
			<NumOfItems />
			<Shuffle />
		</div>
	);
};

export default Filters;
