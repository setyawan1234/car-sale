import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosWithConfig from "@/utils/axiosWithConfig";

export const fetchCar = createAsyncThunk("data/fetchCar", async () => {
    try {
        const response = await axiosWithConfig.get("/list-cars");
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
    extraReducers: (builder) => {
        builder
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
    }
});

const reducer = {
    state: carSlice.reducer,
}

export default reducer;
