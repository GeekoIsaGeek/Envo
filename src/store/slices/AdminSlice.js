import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase-Config';

export const addToDatabase = createAsyncThunk('admin/addToDatabase', async ({ obj, category }) => {
	try {
		await addDoc(collection(db, category), obj);
	} catch (err) {
		console.error(err.message);
	}
});

const AdminSlice = createSlice({
	name: 'admin',
	initialState: {
		authenticated: false,
		status: 'idle',
	},
	reducers: {
		setAuthenticated: (state, action) => {
			state.authenticated = action.payload;
		},
		setStatus: (state, action) => {
			state.status = action.payload;
		},
	},
	extraReducers: {
		[addToDatabase.fulfilled]: (state) => {
			state.status = 'added';
		},
	},
});

export default AdminSlice.reducer;
export const { setAuthenticated, setStatus } = AdminSlice.actions;
