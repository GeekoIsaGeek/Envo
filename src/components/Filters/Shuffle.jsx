import React from 'react';
import { IoShuffle } from 'react-icons/io5';
import styles from './Filters.module.scss';
import { useDispatch } from 'react-redux';
import { shuffle } from '../../features/content/WordsSlice';

const Shuffle = () => {
	const dispatch = useDispatch();
	return (
		<div className={styles.Shuffle} onClick={() => dispatch(shuffle())}>
			Shuffle
			<IoShuffle />
		</div>
	);
};

export default Shuffle;
