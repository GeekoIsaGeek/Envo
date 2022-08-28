import React from 'react';
import styles from './Content.module.scss';
import { capitalize } from '../../utils';

const Examples = ({ examples }) => {
	const getExamples = () => {
		if (Array.isArray(examples)) {
			return examples.map((example, i) => {
				return <li key={i}>{capitalize(example.trim())}</li>;
			});
		}
		return <li>{capitalize(examples?.trim())}</li>;
	};
	return <ul className={styles.Examples}>{getExamples()}</ul>;
};

export default Examples;
