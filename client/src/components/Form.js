import React, { useState } from 'react';
export default function Form() {
	const [word, setWord] = useState('');
	const [type, setType] = useState('');
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
	const handleSubmit = async () => {
		const url = `${baseUrl}${type}=${word}`;
		const response = await axios.get(url);
		console.log(response);
	};

	return (
		<div>
			<input
				type='text'
				placeholder='Search for a word'
				className='px-2 py-1.5 border-2 border-gray-300 rounded m-3'
				onChange={(e) => console.log(e.target.value)}
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
			<button className='bg-indigo-600 px-3 py-1 rounded text-white'>
				Search
			</button>
		</div>
	);
}
