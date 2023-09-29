import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebase';
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const initialState = {
    article: [],
    loading: false,
    error : null,
}

export const sharePost = createAsyncThunk("article/sharePost" , async (payload,ThunkAPI) => {
    const {rejectWithValue} = ThunkAPI;
    try{
        if(payload.image){
            const storageRef = ref(storage, `images/${payload.image.name}`);
            const uploadRef = uploadBytesResumable(storageRef,payload.image);
            uploadRef.on("state_changed", (snapShot) => {
                const progress = Math.round(snapShot.bytesTransferred / snapShot.totalBytes)  * 100;
            },(error) => {
                alert(error);
            },() => {
                getDownloadURL(uploadRef.snapshot.ref).then((link) => {
                    const collRef = collection(db,"articles");
                    addDoc(collRef ,{
                        actor: {
                                description: payload.user.email,
                                title: payload.user.displayName,
                                date: payload.timeStamp,
                                image: payload.user.photo,
                            },
                            comments: 0,
                            video: payload.video,
                            description: payload.description,
                            shareImg: link,
                    });
                })
            }); 
        }
        else{
            const collRef = collection(db, "articles");
            addDoc(collRef, {
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timeStamp,
                    image: payload.user.photo,
                },
                comments: 0,
                video: payload.video,
                description: payload.description,
                shareImg: payload.image,
                });
        }
    } catch(error){
            return rejectWithValue(error);
        }
});

export const getPost = createAsyncThunk("article/getPost" , async (_,ThunkAPI) => {
    const {rejectWithValue , dispatch} = ThunkAPI;
    try{
        var payload;
        const collRef = collection(db,"articles");
        const orderedRef = query(collRef,orderBy("actor.date","desc"));
        onSnapshot(orderedRef, (snapshot) =>{
            payload = snapshot.docs.map((doc) => doc.data());
            dispatch(sotreArticles(payload));
        }); 
        return 1;
    } catch(error){
            return rejectWithValue(error);
    }
});


const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        sotreArticles : (state,action) =>{
            state.article = action.payload;
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(sharePost.pending , (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(sharePost.fulfilled , (state) => {
            state.loading = false;
            state.error = null;
        })
        .addCase(sharePost.rejected , (state,action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(getPost.pending , (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getPost.fulfilled , (state) => {
            state.loading = false;
            state.error = null;
        })
        .addCase(getPost.rejected , (state,action) => {
            state.error = action.payload;
            state.loading = false;
        })
    },
});

export default articleSlice.reducer;
 export const  { sotreArticles } = articleSlice.actions;