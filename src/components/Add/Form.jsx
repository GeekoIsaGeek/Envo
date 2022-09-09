import React, { useRef, useState } from 'react';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import Select from './Select';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase-Config';
import { addNewExpression } from '../../store/slices/ExpressionsSlice';
import { addToDatabase } from '../../store/slices/AddSlice';
import { capitalize } from '../../utils';
import { IoHome } from 'react-icons/io5';
import styles from './Add.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Form = ({ formRef }) => {
	const expressionRef = useRef();
	const definitionRef = useRef();
	const examplesRef = useRef();
	const expressionType = useSelector((state) => state.expressions.expressionType);
	const [category, setCategory] = useState(null);
	const navigate = useNavigate();
	const { status } = useSelector((store) => store.add);
	const dispatch = useDispatch();

	const addNewData = (e) => {
		e.preventDefault();
		const expression = capitalize(expressionRef.current.value);
		const definition = capitalize(definitionRef.current.value);
		const examples = capitalize(examplesRef.current.value);
		const obj = { expression, definition, date_added: Date.now(), examples };
		if (category && expression && definition) {
			dispatch(addToDatabase({ obj, category }));
			expressionType === category && dispatch(addNewExpression(obj)); //update current list of expressions
		}
	};
	const handleLogout = () => {
		signOut(auth);
	};

	const notificationStyles = { color: 'green', fontSize: '1.1rem', fontWeight: '400' };
	return (
		<form onSubmit={addNewData} className={styles.Form} ref={formRef}>
			{status === 'added' && <p style={notificationStyles}>New data was added!</p>}
			<Select category={category} setCategory={setCategory} />
			<input type='text' placeholder='Expression' ref={expressionRef} className={styles.ExpressionInput} />
			<textarea placeholder='Definition...' ref={definitionRef} className={styles.Definition} />
			<textarea placeholder='Examples...' ref={examplesRef} className={styles.Examples} />
			<button>Add</button>
			<button className={styles.Home} onClick={() => navigate('/')}>
				<IoHome />
			</button>
			<button className={styles.Signout} onClick={handleLogout}>
				Logout <RiLogoutCircleRLine />
			</button>
		</form>
	);
};

export default Form;
