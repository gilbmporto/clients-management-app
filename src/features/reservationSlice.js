import { createSlice } from "@reduxjs/toolkit"

export const reservationsSlice = createSlice({
	name: "reservations",
	initialState: {
		value: [],
	},
	reducers: {
		addReservation: (state, action) => {
			state.value.push(action.payload)
		},
		removeReservation: (state, action) => {
			state.value.splice(action.payload, 1)
		},
	},
})

export const { addReservation, removeReservation } = reservationsSlice.actions

export default reservationsSlice.reducer
