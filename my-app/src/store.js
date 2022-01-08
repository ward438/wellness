import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { questions } from "./reducers/questions";


const middleware = [
    ...getDefaultMiddleware(),
    /*YOUR CUSTOM MIDDLEWARES HERE*/
  ];
  
const slices = [    
    questions
];

export const store = configureStore({
    reducer: slices.reduce((reducer, slice) => {
        reducer[slice.name] = slice.reducer;  
        return reducer;
    }, {}),
    middleware,
});