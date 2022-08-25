import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Filters from './Filters/Filters';

import styles from './Search.module.scss';

const TopBar = () => {
	const [input, setInput] = useState('');
	return (
		<div className={styles.Wrapper}>
			<Filters />
			<div className={styles.Search}>
				<FiSearch style={{ color: '#575757' }} />
				<input
					type='text'
					placeholder='Search...'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default TopBar;
