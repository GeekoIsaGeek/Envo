import React, { useState } from 'react';
import styles from './Filters.module.scss';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { setNumberOfExpressions } from '../../store/slices/FilterSlice';
import { useDispatch } from 'react-redux';

const NumOfItems = () => {
	const [count, setCount] = useState('All');
	const [showList, setShowList] = useState(false);
	const dispatch = useDispatch();

	const displayNExpressions = (value) => {
		setCount(value);
		dispatch(setNumberOfExpressions(value));
	};

	return (
		<div className={styles.SelectCount} onClick={() => setShowList(!showList)}>
			Show {count}
			{showList ? <IoIosArrowUp /> : <IoIosArrowDown />}
			{showList && (
				<ul>
					<li onClick={(e) => displayNExpressions(e.target.innerText)}>All</li>
					<li onClick={(e) => displayNExpressions(e.target.innerText)}>5</li>
					<li onClick={(e) => displayNExpressions(e.target.innerText)}>10</li>
					<li onClick={(e) => displayNExpressions(e.target.innerText)}>20</li>
					<li onClick={(e) => displayNExpressions(e.target.innerText)}>30</li>
					<li onClick={(e) => displayNExpressions(e.target.innerText)}>50</li>
				</ul>
			)}
		</div>
	);
};

export default NumOfItems;
