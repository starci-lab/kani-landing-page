import { createSlice } from "@reduxjs/toolkit"


export interface DumpSlice {
    dump: string
}

const initialState: DumpSlice = {
    dump: "",
}

export const dumpSlice = createSlice({
    name: "dump",
    initialState,
    reducers: {
        setDump: (state, action) => {
            state.dump = action.payload
        },
    },
})

export const dumpReducer = dumpSlice.reducer
export const { setDump } = dumpSlice.actions