import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
    scroll: {},
};
export const UISlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            // @ts-ignore
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: UIActions } = UISlice;
export const { reducer: UIReducer } = UISlice;
