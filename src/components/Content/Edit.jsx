import React, { useState } from 'react';
import styles from './Content.module.scss';
import { updateDoc, getDocs, collection, doc } from 'firebase/firestore';
import { db } from '../../Firebase-Config';
import { setExpressions } from '../../store/slices/ExpressionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { decomposeString } from '../../utils';
import { stringify } from '../../utils';

const Edit = ({ data, setEditMode, setShowCard }) => {
	const [expression, setExpression] = useState(data.expression);
	const [definition, setDefinition] = useState(stringify(data.definition));
	const [examples, setExamples] = useState(stringify(data.examples));
	const { expressionType, expressions } = useSelector((state) => state.expressions);
	const dispatch = useDispatch();

	const saveChanges = async (e) => {
		e.preventDefault();
		setEditMode(false);
		const obj = { expression, definition, examples };
		console.log(obj);
		const query = await getDocs(collection(db, expressionType));
		try {
			query.forEach((document) => {
				if (document.data().expression === data.expression) {
					updateDoc(doc(db, expressionType, document.id), obj);
					setEditMode(false);
					setShowCard(false);
				}
			});
			const filteredExpressions = expressions.filter((exp) => exp.expression !== data.expression);
			dispatch(setExpressions([...filteredExpressions, { ...obj, definition, examples }]));
		} catch (e) {
			console.error(e.message);
		}
	};
	return (
		<form className={styles.EditWrapper} onSubmit={saveChanges}>
			<h3>"Multiple examples and definitions must be separated with ,,"</h3>
			<input type='text' value={expression} onChange={(e) => setExpression(e.target.value)} required />
			<h2 className={styles.HeaderExamples}>Definition</h2>
			<textarea type='text' value={definition} onChange={(e) => setDefinition(e.target.value)} required />

			<>
				<h2 className={styles.HeaderExamples}>Examples</h2>
				<textarea
					type='text'
					className={styles.Examples}
					value={examples}
					onChange={(e) => setExamples(e.target.value)}
				/>
			</>

			<button type='submit'>Save Changes</button>
		</form>
	);
};

export default Edit;
