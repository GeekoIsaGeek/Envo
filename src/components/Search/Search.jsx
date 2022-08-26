import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchFor } from '../../store/slices/FilterSlice';

const Search = () => {
	const dispatch = useDispatch();

	return (
		<div className={styles.Search}>
			<FiSearch style={{ color: '#575757' }} />
			<input
				type='text'
				placeholder='Search...'
				onChange={(e) => dispatch(setSearchFor(e.target.value))}
			/>
		</div>
	);
};

export default Search;
