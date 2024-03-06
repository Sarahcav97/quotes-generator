import Form from './components/Form';
import WordList from './components/wordList';

import './css/App.css';

function App() {
	return (
		<div className='m-5 p-5'>
			<h1 className='font-bold text-center text-2xl my-5'>
				Rhyming Dictionary
			</h1>
			<Form />
			<WordList />
		</div>
	);
}

export default App;
