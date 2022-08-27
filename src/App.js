import './App.scss';
import Content from './components/Content/Content';
import Main from './components/Main';
import Navigation from './components/Navigation/Navigation';
import TopBar from './components/TopBar';
import { fetchData } from './store/slices/ExpressionsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const type = useSelector((state) => state.expressions.expressionType);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch, type]);

	return (
		<div className='App'>
			<Navigation />
			<Main>
				<TopBar />
				<Content />
			</Main>
		</div>
	);
}

export default App;
