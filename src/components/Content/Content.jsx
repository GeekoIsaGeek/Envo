import React, { useState } from 'react';
import Card from './Card';
import styles from './Content.module.scss';
import { useSelector } from 'react-redux';
import { getAllExpressions } from '../../store/slices/ExpressionsSlice';

const Content = () => {
	const [showCard, setShowCard] = useState(false);
	const [activeElementData, setActiveElementData] = useState(null);
	const expDefPairs = useSelector(getAllExpressions);
	const show = useSelector((state) => state.filters.show);
	const searchFor = useSelector((state) => state.filters.searchFor);

	const handleClick = (data) => {
		setShowCard(true);
		setActiveElementData(data);
	};

	const getDefinition = (value) => {
		if (Array.isArray(value)) {
			const randIdx = Math.floor(Math.random() * value.length);
			return value[randIdx];
		}
		return value;
	};

	const filterBySearchValue = () => {
		const searchInput = searchFor.trim().toLowerCase();

		if (searchInput) {
			return expDefPairs.filter((pair) => {
				return show === 'Expressions'
					? pair.expression.toLowerCase().includes(searchInput)
					: getDefinition(pair.definition).toLowerCase().includes(searchInput);
			});
		}
		return expDefPairs;
	};

	return (
		<ul className={styles.Content}>
			{filterBySearchValue().map((el, i) => {
				return (
					<li key={i} onClick={() => handleClick(el)}>
						{show === 'Expressions' ? el.expression : getDefinition(el.definition)}
					</li>
				);
			})}
			<Card showCard={showCard} setShowCard={setShowCard} data={activeElementData} />
		</ul>
	);
};

export default Content;
