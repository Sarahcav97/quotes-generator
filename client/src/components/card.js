import React, { useState } from 'react';
export default function Card() {
	const [word, setWord] = useState('');
	const baseUrl = 'https://api.datamuse.com/words?';
	const type = 'ml';

	const url = `${baseUrl}${type}=${word}`;
	console.log(url);
	return (
		<div>
			<input
				type='text'
				placeholder='Search for a word'
				className='px-2 py-1.5 border-2 border-gray-300 rounded m-3'
				onChange={(e) => console.log(e.target.value)}
			></input>
			<button className='bg-indigo-600 px-3 py-1 rounded text-white'>
				Search
			</button>
		</div>
	);
}
