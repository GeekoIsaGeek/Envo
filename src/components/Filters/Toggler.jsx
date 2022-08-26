import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styles from './Filters.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { show } from '../../store/slices/FilterSlice';

const Toggler = () => {
	const [showTogglerOptions, setShowTogglerOptions] = useState(false);
	const dispatch = useDispatch();
	const togglerValue = useSelector((state) => state.filters.show);

	return (
		<div className={styles.Toggler} onClick={() => setShowTogglerOptions(!showTogglerOptions)}>
			{togglerValue}
			{showTogglerOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
			{showTogglerOptions && (
				<ul onMouseLeave={() => setShowTogglerOptions(false)}>
					<li onClick={(e) => dispatch(show(e.target.innerText))}>Expressions</li>
					<li onClick={(e) => dispatch(show(e.target.innerText))}>Definitions</li>
				</ul>
			)}
		</div>
	);
};

export default Toggler;
