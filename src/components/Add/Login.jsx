import React, { useRef, useState } from 'react';
import styles from './Login.module.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase-Config';

const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const [authError, setAuthError] = useState(null);

	const handleLogin = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		signInWithEmailAndPassword(auth, email, password).catch((err) => setAuthError(err.message));
	};

	return (
		<form onSubmit={handleLogin} className={styles.Form}>
			<input type='email' placeholder='Email' ref={emailRef} className={styles.InputEmail} />
			<input
				type='password'
				placeholder='Password'
				ref={passwordRef}
				className={styles.InputPassword}
			/>
			{authError && <p style={{ color: 'indianred', fontWeight: '600' }}>{authError}</p>}
			<button>Login</button>
		</form>
	);
};

export default Login;
