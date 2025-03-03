import  { configureStore } from 'react-redux'
import cartReducer from './features/cartSlice'
export const store = configureStore({
    reducer: {
        cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
