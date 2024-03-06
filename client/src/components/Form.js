import axios from 'axios';
import React, { useState } from 'react';
import { useWord } from '../context/WordContext';
export default function Form() {
	const { types, handleSubmit, setWord, setType, setWordList, setMaxResults } =
		useWord();
	return (
		<div className='border border-gray-500 rounded '>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col p-3'
			>
				<input
					type='text'
					placeholder='Search for a word'
					className='px-2 py-1.5 border-2 border-gray-300 rounded m-3'
					onChange={(e) => setWord(e.target.value)}
				></input>
				<select
					className='px-2 py-1.5 border-2 border-gray-300 rounded m-3 '
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
		</div>
	);
}
