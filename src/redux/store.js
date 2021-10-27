import {configureStore, combineReducers} from '@reduxjs/toolkit'
import basketReducer from './basketSlice'
import userReducer from './userReducer'

const reducer = combineReducers({
    basket: basketReducer,
    user: userReducer
})

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store