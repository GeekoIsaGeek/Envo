import React from 'react';
import styles from './Content.module.scss';
import { capitalize } from '../../utils/capitalize';

const Card = ({ showCard, setShowCard, data }) => {
	const getDefinition = () => {
		//check if the phrase/expression has multiple definitions (separated by ;) if so, capitalize each one
		if (data.definition.includes(';')) {
			const definitions = data.definition.split(';');
			return (
				<ul>
					{definitions.map((elem, i) => {
						return <li key={i}>{capitalize(elem.trim())}</li>;
					})}
				</ul>
			);
		}
		return <p>{data.definition}</p>;
	};

	if (showCard)
		return (
			<div className={styles.Overlay} onClick={() => setShowCard(false)}>
				<div className={styles.Card}>
					<h2>{data.expression}</h2>
					{getDefinition()}
				</div>
			</div>
		);
};

export default Card;
