import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase-Config';
import { decomposeString } from '../../utils';

export const fetchData = createAsyncThunk('expressions/fetchData', async (arg, { getState }) => {
	const state = getState().expressions;
	try {
		const collectionRef = collection(db, state.expressionType);
		const querySnapshot = await getDocs(collectionRef);
		let data = [];
		querySnapshot.forEach((doc) => data.push(doc.data()));
		return data;
	} catch (err) {
		console.error(err.message);
	}
});

const ExpressionsSlice = createSlice({
	name: 'expressions',
	initialState: {
		expressionType: 'Words',
		expressions: [],
		error: null,
	},
	reducers: {
		shuffle: (state) => {
			for (let i = state.expressions.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[state.expressions[i], state.expressions[j]] = [
					state.expressions[j],
					state.expressions[i],
				];
			}
		},
		setExpressionsType: (state, action) => {
			state.expressionType = action.payload;
		},
		addNewExpression: (state, action) => {
			state.expressions.push(action.payload);
		},
		sortByDateAdded: (state, action) => {
			if (action.payload === 'Oldest') {
				state.expressions.sort((a, b) => a.date_added - b.date_added);
			} else {
				state.expressions.sort((a, b) => b.date_added - a.date_added);
			}
		},
	},
	extraReducers: {
		[fetchData.fulfilled]: (state, action) => {
			state.expressions = action.payload.map((elem) => {
				//check if the phrase/expression has "multiple definitions and examples" (multiple sentences in a single string separated by ,,) if so, actually separate and save as arrays
				const definitions = decomposeString(elem.definition);
				const examples = decomposeString(elem.examples);
				return {
					...elem,
					definition: definitions ? definitions : elem.definition,
					examples: examples ? examples : elem.examples,
				};
			});
		},
	},
});

export const getAllExpressions = (state) => state.expressions.expressions;
export default ExpressionsSlice.reducer;
export const { shuffle, setExpressionsType, addNewExpression, sortByDateAdded } =
	ExpressionsSlice.actions;
