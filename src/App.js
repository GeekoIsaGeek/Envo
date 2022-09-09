import './App.scss';
import Main from './components/Main';
import Navigation from './components/Navigation/Navigation';
import { fetchData } from './store/slices/ExpressionsSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Add from './components/Add/Add';
import { AnimatePresence } from 'framer-motion';
//prettier-ignore

function App() {
	const dispatch = useDispatch();
	const type = useSelector((state) => state.expressions.expressionType);
	const location=useLocation()

	useAuth();
	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch, type]);

	return (
		<div className='App'>
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={
						<React.Fragment>
							<Main/>
							<Navigation/>
						</React.Fragment>
					} />
					<Route path='/add' element={<Add />} />
					<Route path='*' element={<Navigate to='/'/>}/>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
