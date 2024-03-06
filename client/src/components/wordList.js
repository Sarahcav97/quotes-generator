import React from 'react';
import { useWord } from '../context/WordContext';
import Word from './Word';
export default function WordList() {
	const { wordList } = useWord();
	return (
		<div>
			<div className='mt-4 text-center space-y-6'>
				<h2 className='font-semibold text-xl text-center'>Word List</h2>
				<div>
					{wordList.length > 0 ? (
						wordList.map((resultWord, index) => (
							<Word
								key={index}
								word={resultWord.word}
							/>
						))
					) : (
						<p>Please search for a word</p>
					)}
				</div>
			</div>
		</div>
	);
}
