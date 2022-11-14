import React, { useState } from 'react';
import Card from './Card';
import styles from './Content.module.scss';
import { useSelector } from 'react-redux';
import { getAllExpressions } from '../../store/slices/ExpressionsSlice';
import { returnNExpressions } from '../../utils';
import { AnimatePresence } from 'framer-motion';

const Content = () => {
	const [showCard, setShowCard] = useState(false);
	const [activeElementData, setActiveElementData] = useState(null);
	let allExpressions = useSelector(getAllExpressions);
	const show = useSelector((state) => state.filters.show);
	const searchFor = useSelector((state) => state.filters.searchFor);
	const showN = useSelector((state) => state.filters.showN);
	const handleClick = (data) => {
		setShowCard(true);
		setActiveElementData(data);
	};
	if (showN !== 'All') {
		allExpressions = returnNExpressions(allExpressions, showN);
	}

	const getDefinition = (value) => {
		//if the expression has multiple definitions, render any of them on every state change
		if (Array.isArray(value)) {
			const randIdx = Math.floor(Math.random() * value.length);
			return value[randIdx];
		}
		return value;
	};

	const filterBySearchValue = () => {
		const searchInput = searchFor.trim().toLowerCase();
		if (searchInput) {
			return allExpressions.filter((pair) => {
				return show === 'Expressions'
					? pair.expression.toLowerCase().includes(searchInput)
					: getDefinition(pair.definition).toLowerCase().includes(searchInput);
			});
		}
		return allExpressions;
	};

	return (
		<ul className={styles.Content}>
			<AnimatePresence mode='wait'>
				{filterBySearchValue().map((el, i) => {
					return (
						<li key={i} onClick={() => handleClick(el)}>
							{show === 'Expressions' ? el.expression : getDefinition(el.definition)}
						</li>
					);
				})}
				{showCard && <Card showCard={showCard} setShowCard={setShowCard} data={activeElementData} />}
			</AnimatePresence>
		</ul>
	);
};

export default Content;
