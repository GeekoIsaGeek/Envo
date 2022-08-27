import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase-Config';

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
			for (let i = state.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[state[i], state[j]] = [state[j], state[i]];
			}
		},
		setExpressionsType: (state, action) => {
			state.expressionType = action.payload;
		},
		addNewExpression: (state, action) => {
			state.expressions.push(action.payload);
		},
	},
	extraReducers: {
		[fetchData.fulfilled]: (state, action) => {
			state.expressions = action.payload;
		},
	},
});

export const getAllExpressions = (state) => state.expressions.expressions;
export default ExpressionsSlice.reducer;
export const { shuffle, setExpressionsType, addNewExpression } = ExpressionsSlice.actions;
