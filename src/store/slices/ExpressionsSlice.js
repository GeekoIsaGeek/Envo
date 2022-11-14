import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase-Config';
import { decomposeString, sortByDateAdded } from '../../utils';

export const fetchData = createAsyncThunk('expressions/fetchData', async (arg, { getState }) => {
	const type = getState().expressions.expressionType;
	const date = getState().filters.date;

	try {
		const collectionRef = collection(db, type);
		const querySnapshot = await getDocs(collectionRef);
		let data = [];
		querySnapshot.forEach((doc) => data.push(doc.data()));
		return sortByDateAdded(data, date);
	} catch (err) {
		console.error(err.message);
	}
});

const ExpressionsSlice = createSlice({
	name: 'expressions',
	initialState: {
		expressionType: 'Words',
		expressions: [],
	},
	reducers: {
		shuffle: (state) => {
			for (let i = state.expressions.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[state.expressions[i], state.expressions[j]] = [state.expressions[j], state.expressions[i]];
			}
		},
		setExpressionsType: (state, action) => {
			state.expressionType = action.payload;
		},
		setExpressions: (state, action) => {
			state.expressions = action.payload;
		},
		addNewExpression: (state, action) => {
			state.expressions.push(action.payload);
		},
		sortByDate: (state, action) => {
			state.expressions = sortByDateAdded(state.expressions, action.payload);
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
export const { shuffle, setExpressionsType, setExpressions, addNewExpression, showNExpressions, sortByDate } =
	ExpressionsSlice.actions;
