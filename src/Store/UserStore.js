import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../Reducer/UserReducer'

//configure store
const UserStore = configureStore({
    reducer : UserReducer,
    devtools: true
})

export default UserStore