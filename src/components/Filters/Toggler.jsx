import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styles from './Filters.module.scss';

const Toggler = () => {
	const [showTogglerOptions, setShowTogglerOptions] = useState(false);
	const [togglerValue, setTogglerValue] = useState('Expressions');

	return (
		<div className={styles.Toggler} onClick={() => setShowTogglerOptions(!showTogglerOptions)}>
			{togglerValue}
			{showTogglerOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
			{showTogglerOptions && (
				<ul onMouseLeave={() => setShowTogglerOptions(false)}>
					<li onClick={(e) => setTogglerValue(e.target.innerText)}>Expressions</li>
					<li onClick={(e) => setTogglerValue(e.target.innerText)}>Definitions</li>
				</ul>
			)}
		</div>
	);
};

export default Toggler;
