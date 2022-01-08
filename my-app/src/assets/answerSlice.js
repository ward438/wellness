import { createSlice, nanoid } from '@reduxjs/toolkit'




const answerSlice = createSlice({
    name: 'answer',
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (text) => {
                const id = nanoid()
                return { payload: { id, text } }
            },
        },
    },
})
