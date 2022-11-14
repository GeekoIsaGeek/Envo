import React, { useState } from 'react';
import styles from './Content.module.scss';
import { getListItems } from '../../utils';
import { motion } from 'framer-motion';
import { auth } from '../../Firebase-Config';
import Edit from './Edit';
import { doc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase-Config';
import { useSelector, useDispatch } from 'react-redux';
import { setExpressions } from '../../store/slices/ExpressionsSlice';

const wrapperVariants = {
	visible: {
		opacity: [0, 1],
		transition: { duration: 0.2 },
	},
	hidden: {
		opacity: [1, 0],
		transition: { duration: 0.2 },
	},
};
const Card = ({ setShowCard, data }) => {
	const [editMode, setEditMode] = useState(false);
	const { expressionType, expressions } = useSelector((state) => state.expressions);
	const dispatch = useDispatch();

	const handleDeletion = async () => {
		const query = await getDocs(collection(db, expressionType));
		try {
			query.forEach((document) => {
				if (document.data().expression === data.expression) {
					deleteDoc(doc(db, expressionType, document.id));
					setEditMode(false);
					setShowCard(false);
				}
			});
			const updatedData = expressions.filter((exp) => exp.expression !== data.expression);
			dispatch(setExpressions(updatedData));
		} catch (e) {
			console.log(e.message);
		}
	};
	return (
		<motion.div
			variants={wrapperVariants}
			animate='visible'
			exit='hidden'
			className={styles.Overlay}
			onClick={() => setShowCard(false)}
		>
			<div className={styles.Card} onClick={(e) => e.stopPropagation()}>
				{editMode ? (
					<Edit data={data} setEditMode={setEditMode} setShowCard={setShowCard} />
				) : (
					<>
						<h2>~ {data.expression} ~</h2>
						<ul>{getListItems(data.definition)}</ul>
						{data.examples && (
							<>
								<h2 className={styles.HeaderExamples}>Examples</h2>
								<ul className={styles.Examples}>{getListItems(data.examples)}</ul>
							</>
						)}
						{auth.currentUser && (
							<div className={styles.Manage}>
								<h4 onClick={() => setEditMode(true)}>Edit</h4>
								<h4 onClick={handleDeletion}>Delete</h4>
							</div>
						)}
					</>
				)}
			</div>
		</motion.div>
	);
};

export default Card;
