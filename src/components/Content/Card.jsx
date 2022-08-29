import React from 'react';
import styles from './Content.module.scss';
import { getListItems } from '../../utils';

const Card = ({ showCard, setShowCard, data }) => {
	if (showCard)
		return (
			<div className={styles.Overlay} onClick={() => setShowCard(false)}>
				<div className={styles.Card}>
					<h2>~ {data.expression} ~</h2>
					<ul>{getListItems(data.definition)}</ul>
					{data.examples && (
						<>
							<h2 className={styles.HeaderExamples}>Examples</h2>
							<ul className={styles.Examples}>{getListItems(data.examples)}</ul>
						</>
					)}
				</div>
			</div>
		);
};

export default Card;
