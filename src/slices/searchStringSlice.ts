import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type SearchStringState = {
  value: string,
}

const initialState: SearchStringState = {
  value: '',
};

export const searchStringSlice = createSlice({
  name: 'searchString',
  initialState,
  reducers: {
    setSearchString: (
        _state: SearchStringState,
        action: PayloadAction<string>,
    ) => {
      return {
        value: action.payload,
      };
    },
  },
});

export const {setSearchString} = searchStringSlice.actions;

export default searchStringSlice.reducer;
