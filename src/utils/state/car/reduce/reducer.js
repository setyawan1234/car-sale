import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosWithConfig from "@/utils/axiosWithConfig";

// createAsyncThunk membuat action creator yang menanngani pemanggilan API


export const fetchCar = createAsyncThunk("data/fetchCar", async () => {
    try {
        const response = await axiosWithConfig.get("/list-cars");
        return response
    } catch (error) {
        throw Error(error);
    }
});

export const createProduct = createAsyncThunk("data/createProduct", async (data) => {
    try {
        const newData = {
            ...data
        };
        const response = await axiosWithConfig.post("/list-cars", newData);
        return response
    } catch (error) {
        throw Error(error);
    }
});

export const updateProduct = createAsyncThunk("data/updateProduct", async (data) => {
    const { id } = data
    try {
        const newData = {
            ...data
        };
        const response = await axiosWithConfig.put(`/list-cars/${id}`, newData);
        return response
    } catch (error) {
        throw Error(error);
    }
});

export const deleteProduct = createAsyncThunk("data/deleteProduct", async (productId) => {
    try {
        const response = await axiosWithConfig.delete("/list-cars/" + productId);
        return response
    } catch (error) {
        throw Error(error);
    }
});

const initialState = {
    data: [],
    error: null,
    loading: false,
};

const carSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder) => { //menangani perubahan state yang terkait dengan action seperti pending, fulfilled, dan rejected 
        builder
            // fetch
            .addCase(fetchCar.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCar.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.error = null;
            })
            .addCase(fetchCar.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            // create
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload.data);
                state.error = null;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            // update
            .addCase(updateProduct.pending,(state)=>{
                state.loading = true;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload && action.payload.id) {
                  state.data = state.data.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                  );
                }
                state.error = null;
              })
            .addCase(updateProduct.rejected,(state,action)=>{
                state.error = action.error.message;
                state.loading = false;
            })
            // delete
            .addCase(deleteProduct.pending,(state)=>{
                state.loading = true;
            })
            .addCase(deleteProduct.fulfilled,(state,action)=>{
                state.loading = false;
                state.data = state.data.filter((item) => item.id !== action.payload.id);
                state.error = null;
            })
            .addCase(deleteProduct.rejected,(state,action)=>{
                state.error = action.error.message;
                state.loading = false;
            })
    }
});

const reducer = {
    state: carSlice.reducer,
}

export default reducer;
