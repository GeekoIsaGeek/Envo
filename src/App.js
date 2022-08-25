import './App.scss';
import Content from './components/Content/Content';
import Main from './components/Main';
import Navigation from './components/Navigatoin/Navigation';
import TopBar from './components/TopBar';

function App() {
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
