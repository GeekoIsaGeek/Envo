import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styles from './Add.module.scss';
import { motion } from 'framer-motion';

const Select = ({ category, setCategory }) => {
	const [showMenu, setShowMenu] = useState(false);
	const handleSelect = (value) => {
		setCategory(value);
	};

	return (
		<div className={styles.Select} onClick={() => setShowMenu(!showMenu)}>
			<div className={styles.Category}>
				{!category ? 'Category' : category} {showMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
			</div>
			{showMenu && (
				<ul className={styles.Categories}>
					<li onClick={(e) => handleSelect(e.target.innerText)}>Words</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>Idioms</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>Phrasal Verbs</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>Basic Phrases</li>
				</ul>
			)}
		</div>
	);
};

export default Select;
