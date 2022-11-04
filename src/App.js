import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import ReservationCard from "./components/ReservationCard"
import CustomerCard from "./components/CustomerCard"
import { addReservation } from "./features/reservationSlice"
import "./index.css"

function App() {
	const [reservationName, setReservationName] = useState("")

	const reservations = useSelector((state) => state.reservations.value)
	const customers = useSelector((state) => state.customers.value)
	console.log(customers)

	const dispatch = useDispatch()

	const handleClick = () => {
		if (!reservationName) return
		dispatch(addReservation(reservationName))
		setReservationName("")
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!reservationName) return
		dispatch(addReservation(reservationName))
		setReservationName("")
	}

	return (
		<div className="flex flex-row w-full">
			<div className="flex flex-col flex-1 w-1/4 justify-between items-center h-screen bg-blue-500 border-r-4 border-black">
				<div className="flex flex-col m-2 p-4 items-center">
					<h3 className="text-3xl">Reservations</h3>
					{reservations &&
						reservations.map((name, index) => {
							return <ReservationCard key={index} name={name} index={index} />
						})}
				</div>
				<div className="flex flex-col m-4 p-4 items-center">
					<form
						onSubmit={handleSubmit}
						className="items-center justify-center align-middle"
					>
						<input
							className="m-4 p-3 rounded-full min-w-[120px] w-10/12"
							placeholder="Enter client name here..."
							onChange={(e) => setReservationName(e.target.value)}
							value={reservationName}
						/>
						<button
							className="p-3 bg-red-300 border-1 rounded-full text-white hover:bg-red-500 min-w-[120px] w-10/12 m-4"
							onClick={handleClick}
						>
							Register
						</button>
					</form>
				</div>
			</div>
			<div className="flex flex-col w-3/4 items-center h-screen bg-blue-300">
				<div className="m-4 p-4 items-center text-center">
					<h3 className="text-3xl">Customers</h3>
					{customers.map((customer, index) => {
						return (
							<CustomerCard
								key={customer.id}
								name={customer.name}
								id={customer.id}
								requests={customer.requests}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default App
