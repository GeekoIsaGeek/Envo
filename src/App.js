import './App.scss';
import Main from './components/Main';
import Navigation from './components/Navigation/Navigation';
import { fetchData } from './store/slices/ExpressionsSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Add from './components/Add/Add';
//prettier-ignore

function App() {
	const dispatch = useDispatch();
	const type = useSelector((state) => state.expressions.expressionType);

	useAuth();
	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch, type]);

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={
					<React.Fragment>
						<Main/>
						<Navigation/>
					</React.Fragment>
				} />
				<Route path='/add' element={<Add />} />
				<Route path='*' element={<Navigate to='/'/>}/>
			</Routes>
		</div>
	);
}

export default App;
