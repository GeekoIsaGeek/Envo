import './App.scss';
import Main from './components/Main';
import Navigation from './components/Navigation/Navigation';
import { fetchData } from './store/slices/ExpressionsSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import useAuth from './hooks/useAuth';
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
				<Route path='/admin' element={<Admin />} />
			</Routes>
		</div>
	);
}

export default App;
