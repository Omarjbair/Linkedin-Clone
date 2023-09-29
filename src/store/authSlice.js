import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {auth , provider} from '../firebase.js';
import { signInWithPopup } from 'firebase/auth';


const initialState = {
    userInfo: null,
    loading : false,
    error : null
}

export const getUserInfo = createAsyncThunk("auth/getUserInfo" , async (_,ThunkAPI) => {
    const {rejectWithValue} = ThunkAPI;
    try{
        let data;
        await signInWithPopup(auth,provider).then((res) => {
            data = res.user;
        }).catch((err) => {throw err.message});
        return {
            email:data.email,
            photo: data.photoURL,
            displayName: data.displayName,
        };
    }
    catch(error){
            return rejectWithValue(error);
        }
});


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOut : (state) => {
            state.userInfo = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.pending , (state) => {
            state.loading = true;
            state.error = null;
            state.userInfo = null;
        })
        .addCase(getUserInfo.fulfilled , (state,action) => {
            state.loading = false;
            state.error = null;
            state.userInfo = action.payload;
        })
        .addCase(getUserInfo.rejected , (state,action) => {
            state.error = action.payload;
            state.loading = false;
            state.userInfo = null;
        });
    },
});

export const { signOut } = authSlice.actions

export default authSlice.reducer;