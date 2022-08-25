import React from 'react';
import { IoShuffle } from 'react-icons/io5';
import styles from './Filters.module.scss';

const Shuffle = () => {
	return (
		<div className={styles.Shuffle}>
			Shuffle
			<IoShuffle />
		</div>
	);
};

export default Shuffle;
