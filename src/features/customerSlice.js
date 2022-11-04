import { createSlice } from "@reduxjs/toolkit"

export const customersSlice = createSlice({
	name: "customers",
	initialState: {
		value: [],
	},
	reducers: {
		addCustomer: (state, action) => {
			state.value.push(action.payload)
		},
		addRequestsToCustomer: (state, action) => {
			state.value.forEach((customer) => {
				if (customer.id === action.payload.id) {
					customer.requests.push(action.payload.requests)
				}
			})
		},
	},
})

export const { addCustomer, addRequestsToCustomer } = customersSlice.actions

export default customersSlice.reducer
