import React, { useState } from 'react';
import Card from './Card';
import styles from './Content.module.scss';
import { useSelector } from 'react-redux';

const Content = () => {
	const [showCard, setShowCard] = useState(false);
	const [activeElementData, setActiveElementData] = useState(null);
	const expressions = useSelector((state) => state.words);

	const handleClick = (data) => {
		setShowCard(true);
		setActiveElementData(data);
	};

	return (
		<ul className={styles.Content}>
			{expressions.map((el, i) => {
				return (
					<li key={i} onClick={() => handleClick(el)}>
						{el.expression}
					</li>
				);
			})}
			<Card showCard={showCard} setShowCard={setShowCard} data={activeElementData} />
		</ul>
	);
};

export default Content;
