import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: []
};

export const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        loadTeam: (state, action) =>{
            state.team = action.payload
        }
    }
})

export const {loadTeam} = teamSlice.actions

export const selectTeam = (state) => state.team

export default teamSlice.reducer