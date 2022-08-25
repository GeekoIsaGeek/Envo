import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './Search.module.scss';

const Search = () => {
	const [input, setInput] = useState('');

	return (
		<div className={styles.Search}>
			<FiSearch style={{ color: '#575757' }} />
			<input
				type='text'
				placeholder='Search...'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</div>
	);
};

export default Search;
