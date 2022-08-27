import { useEffect } from 'react';
import { auth } from '../Firebase-Config';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../store/slices/AdminSlice';

const useAuth = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, () => {
			auth.currentUser ? dispatch(setAuthenticated(true)) : dispatch(setAuthenticated(false));
		});
	}, [dispatch]);
};

export default useAuth;
