import React from 'react';
import styles from './Content.module.scss';
import { capitalize } from '../../utils';
import Examples from './Examples';

const Card = ({ showCard, setShowCard, data }) => {
	const getDefinition = () => {
		if (Array.isArray(data.definition)) {
			return (
				<ul>
					{data.definition.map((elem, i) => {
						return <li key={i}>{capitalize(elem.trim())}</li>;
					})}
				</ul>
			);
		}
		return <p>{capitalize(data.definition.trim())}</p>;
	};

	if (showCard)
		return (
			<div className={styles.Overlay} onClick={() => setShowCard(false)}>
				<div className={styles.Card}>
					<h2>~ {data.expression} ~</h2>
					{getDefinition()}
					{data.examples && (
						<>
							<h2 className={styles.HeaderExamples}>Examples</h2>
							<Examples examples={data.examples} />
						</>
					)}
				</div>
			</div>
		);
};

export default Card;
