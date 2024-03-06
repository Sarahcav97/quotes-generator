import axios from 'axios';
import React, { useState } from 'react';
export default function Form() {
	const [word, setWord] = useState('');
	const [type, setType] = useState('rel_rhy');
	const [maxResults, setMaxResults] = useState(10);
	const [wordList, setWordList] = useState([]);
	const baseUrl = 'https://api.datamuse.com/words?';

	const types = [
		{ value: 'rel_rhy', label: 'Rhymes' },
		{
			value: 'ml',
			label: 'Meaning Like',
		},
		{
			value: 'sl',
			label: 'Sounds Like',
		},
		{
			value: 'sp',
			label: 'Spelled Like',
		},
		{
			value: 'rel_jjb',
			label: 'Adjectives',
		},
	];
	const handleSubmit = async (e) => {
		e.preventDefault();
		const url = `${baseUrl}${type}=${word}&max=${maxResults}`;
		const response = await axios.get(url);
		setWordList(response.data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Search for a word'
					className='px-2 py-1.5 border-2 border-gray-300 rounded m-3'
					onChange={(e) => setWord(e.target.value)}
				></input>
				<select
					className='px-2 py-1.5 border-2 border-gray-300 rounded m-3f'
					onChange={(e) => setType(e.target.value)}
				>
					{types.map((type) => (
						<option
							key={type.value}
							value={type.value}
						>
							{type.label}
						</option>
					))}
				</select>
				<select
					className='px-2 py-1.5 border-2 border-gray-300 rounded m-3'
					onChange={(e) => setMaxResults(e.target.value)}
				>
					<option value='10'>10</option>
					<option value='20'>20</option>
					<option value='30'>30</option>
					<option value='40'>40</option>
					<option value='50'>50</option>
					<option value='100'>100</option>
				</select>
				<button
					type='submit'
					className='bg-indigo-600 px-3 py-1 rounded text-white'
				>
					Search
				</button>
			</form>
			<div>
				<h1>Word List</h1>
				<div>
					{wordList.map((resultWord, index) => (
						<p key={`result-${index}`}>
							{index + 1} - {resultWord.word}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
