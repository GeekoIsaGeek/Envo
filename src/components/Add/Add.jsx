import React, { useRef, useEffect } from 'react';
import styles from './Add.module.scss';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../../store/slices/AddSlice';
import Form from './Form';

const Add = () => {
	const formRef = useRef();
	const dispatch = useDispatch();
	const { authenticated, status } = useSelector((store) => store.add);

	useEffect(() => {
		if (status === 'added') {
			formRef.current.reset();
			setTimeout(() => {
				dispatch(setStatus('idle'));
			}, 2000);
		}
	}, [status, dispatch]);

	if (!authenticated) {
		return (
			<div className={styles.Wrapper}>
				<Login />
			</div>
		);
	}

	return (
		<div className={styles.Wrapper}>
			<Form formRef={formRef} />
			<p className={styles.Note}>
				In order to define multiple definitions or examples, put ,, at the end of every sentence
			</p>
		</div>
	);
};

export default Add;
