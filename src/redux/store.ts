import { configureStore } from '@reduxjs/toolkit'
import cartReduser from './cartReduser'
import likeReducer from './likeReducer'

export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
        productsInCart: cartReduser,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch