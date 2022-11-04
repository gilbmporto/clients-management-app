import React from "react"
import { useDispatch } from "react-redux"
import { addCustomer } from "../features/customerSlice"
import { removeReservation } from "../features/reservationSlice"
import { v4 as uuidv4 } from "uuid"

function ReservationCard({ name, index }) {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(removeReservation(index))
		dispatch(
			addCustomer({
				id: uuidv4(),
				name: name,
				requests: [],
			})
		)
	}

	return (
		<div
			onClick={handleClick}
			className="m-3 p-3 shadow rounded-xl bg-white hover:cursor-pointer"
		>
			{name}
		</div>
	)
}

export default ReservationCard
