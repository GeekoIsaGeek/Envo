import React, { useRef, useState } from 'react';
import styles from './Login.module.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase-Config';
import { motion } from 'framer-motion';

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
		<motion.form
			animate={{ opacity: [0, 1] }}
			exit={{ opacity: [1, 0] }}
			onSubmit={handleLogin}
			className={styles.Form}
		>
			<input type='email' placeholder='Email' ref={emailRef} className={styles.InputEmail} />
			<input type='password' placeholder='Password' ref={passwordRef} className={styles.InputPassword} />
			{authError && <p style={{ color: 'indianred', fontWeight: '600' }}>{authError}</p>}
			<button>Login</button>
		</motion.form>
	);
};

export default Login;
