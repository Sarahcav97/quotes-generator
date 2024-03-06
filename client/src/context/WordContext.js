import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
const WordContext = createContext();
const WordProvider = ({ children }) => {
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
		<WordContext.Provider
			value={{
				word,
				setWord,
				type,
				setType,
				maxResults,
				setMaxResults,
				wordList,
				setWordList,
				types,
				handleSubmit,
			}}
		>
			{children}
		</WordContext.Provider>
	);
};
export const useWord = () => useContext(WordContext);
export default WordProvider;
