import { configureStore } from "@reduxjs/toolkit"
import reservationSlice from "../features/reservationSlice"
import customersSlice from "../features/customerSlice"

export const store = configureStore({
	reducer: {
		reservations: reservationSlice,
		customers: customersSlice,
	},
})
