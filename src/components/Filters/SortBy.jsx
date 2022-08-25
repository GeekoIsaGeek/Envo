import React, { useState } from 'react';
import styles from './Filters.module.scss';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const SortBy = () => {
	const [showSortingOptions, setShowSortingOptions] = useState(false);
	const [sortBy, setSortBy] = useState('Newest');

	const handleSort = (value) => {
		setSortBy(value);
		setShowSortingOptions(!showSortingOptions);
	};
	return (
		<div className={styles.SortBy} onClick={() => setShowSortingOptions(!showSortingOptions)}>
			{`${sortBy}` || 'Sort By'}
			{showSortingOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
			{showSortingOptions && (
				<ul onMouseLeave={() => setShowSortingOptions(false)}>
					<li onClick={(e) => handleSort(e.target.innerText)}>Newest</li>
					<li onClick={(e) => handleSort(e.target.innerText)}>Oldest</li>
				</ul>
			)}
		</div>
	);
};

export default SortBy;
