import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILoader {
    isLoading: boolean;
}

const initialState: ILoader = {
    isLoading: false,
};

const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
