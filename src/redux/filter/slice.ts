import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, sortPropertyEnum } from "./types";

const initialState: FilterSliceState = {
    searchValue: "",
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: "popularity",
        sortProperty: sortPropertyEnum.RATING_DESC,
    },
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setSort: (state, action: PayloadAction<Sort>) => {
            state.sort = action.payload;
        },

        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
});


export const { setCategoryId, setSort, setCurrentPage, setSearchValue } =
    filterSlice.actions;

export default filterSlice.reducer;
