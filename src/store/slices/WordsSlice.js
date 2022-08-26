import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		expression: 'Run out of',
		definition: 'You have nothing left ',
	},
	{
		expression: 'Look in on',
		definition: 'To check if someone is doing well ',
	},
	{
		expression: 'Wake up to something',
		definition: 'To become aware of something or pay more attention to it',
	},
	{
		expression: 'Turn on',
		definition: ['To switch something on', 'To become sexually aroused'],
	},
];

const WordsSlice = createSlice({
	name: 'words',
	initialState,
	reducers: {
		shuffle: (state) => {
			for (let i = state.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[state[i], state[j]] = [state[j], state[i]];
			}
		},
	},
});

export const getAllExpressions = (state) => state.words;
export default WordsSlice.reducer;
export const { shuffle } = WordsSlice.actions;
