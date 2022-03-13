import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as uuid from 'uuid';

export type StringItem = {
  id: string,
  value: string,
}

export type StringItemsState = {
  value: StringItem[],
}

const initialState: StringItemsState = {
  value: [],
};

export const stringItemsSlice = createSlice({
  name: 'stringItems',
  initialState,
  reducers: {
    addStringItem: (state: StringItemsState, action: PayloadAction<string>) => {
      const newStringItem: StringItem = {
        id: uuid.v4(),
        value: action.payload,
      };

      return {
        value: [...state.value, newStringItem],
      };
    },
  },
});

export const {addStringItem} = stringItemsSlice.actions;

export default stringItemsSlice.reducer;
