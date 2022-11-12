import React, { useState } from 'react';
import { getListItems } from '../../utils';
import styles from './Content.module.scss';

const Edit = ({ data, setEditMode }) => {
	const [expression, setExpression] = useState(data.expression);
	const [definition, setDefinition] = useState(data.definition);
	const [example, setExample] = useState(data.examples);
	const saveChanges = (e) => {
		e.preventDefault();
		setEditMode(false);
	};

	return (
		<div className={styles.EditWrapper}>
			<input type='text' value={expression} onChange={(e) => setExpression(e.target.value)} />
			<h2 className={styles.HeaderExamples}>Definition</h2>
			<textarea type='text' value={definition} onChange={(e) => setDefinition(e.target.value)} />
			{data.examples && (
				<>
					<h2 className={styles.HeaderExamples}>Examples</h2>
					<textarea
						type='text'
						className={styles.Examples}
						value={example}
						onChange={(e) => setExample(e.target.value)}
					/>
				</>
			)}
			<button onClick={(e) => saveChanges(e)}>Save Changes</button>
		</div>
	);
};

export default Edit;
