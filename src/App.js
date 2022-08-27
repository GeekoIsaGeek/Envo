import './App.scss';
import Content from './components/Content/Content';
import Main from './components/Main';
import Navigation from './components/Navigation/Navigation';
import TopBar from './components/TopBar';
import { fetchData } from './store/slices/ExpressionsSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import useAuth from './hooks/useAuth';

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
				<Route
					path='/'
					element={
						<React.Fragment>
							<Navigation />
							<Main>
								<TopBar />
								<Content />
							</Main>
						</React.Fragment>
					}
				/>
				<Route path='/admin' element={<Admin />} />
			</Routes>
		</div>
	);
}

export default App;
