import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styles from './Admin.module.scss';

const Select = ({ category, setCategory }) => {
	const [showMenu, setShowMenu] = useState(false);
	const handleSelect = (value) => {
		setCategory(value);
	};

	return (
		<div className={styles.Select} onClick={() => setShowMenu(!showMenu)}>
			<div className={styles.Category}>
				{!category ? 'Category' : category} <IoIosArrowDown />
			</div>
			{showMenu && (
				<ul className={styles.Categories}>
					<li onClick={(e) => handleSelect(e.target.innerText)}>Words</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>Idioms</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>Phrasal Verbs</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>Common Phrases</li>
				</ul>
			)}
		</div>
	);
};

export default Select;
