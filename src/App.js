import './App.css';
import Content from './components/Content/Content';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Search from './components/Search';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Main>
				<Search />
				<Content />
			</Main>
		</div>
	);
}

export default App;
