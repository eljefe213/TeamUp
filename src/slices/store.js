import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import teamReducer from "./teamSlice"


const store = configureStore({
    reducer: {
        user: userReducer,
        team: teamReducer

    }
})

export default store