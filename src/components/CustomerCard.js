import React, { useState } from "react"
import { addRequestsToCustomer } from "../features/customerSlice"
import { useDispatch } from "react-redux"

function CustomerCard({ name, id, requests }) {
	const dispatch = useDispatch()

	const [clientRequests, setClientRequests] = useState("")

	const addRequest = () => {
		if (!clientRequests) return
		dispatch(
			addRequestsToCustomer({
				id: id,
				requests: clientRequests,
			})
		)
		setClientRequests("")
	}

	const handleRequestSubmit = (e) => {
		e.preventDefault()
		if (!clientRequests) return
		dispatch(
			addRequestsToCustomer({
				id: id,
				requests: clientRequests,
			})
		)
		setClientRequests("")
	}

	return (
		<div className="flex flex-row m-4 p-4 shadow rounded-xl bg-white hover:cursor-pointer justify-between min-w-[450px] w-[600px]">
			<div className="flex flex-col m-2 p-2 w-2/4 justify-start items-start">
				<p className="text-lg">
					Client ID: {id.slice(0, 6)}...{id.slice(id.length - 4)}
				</p>
				<p className="text-xl">Name: {name}</p>
				<div className="text-lg">
					Requests:
					{requests.map((request, index) => {
						return (
							<p key={index} className="text-sm">
								{request}
							</p>
						)
					})}
				</div>
			</div>
			<div className="flex flex-col justify-center items-end w-2/5 ">
				<div className="flex flex-col items-center">
					<form onSubmit={handleRequestSubmit}>
						<input
							type="text"
							placeholder="Enter requests here..."
							className="bg-gray-100 rounded-xl min-w-[120px] w-[200px] p-2 m-1"
							onChange={(e) => setClientRequests(e.target.value)}
							value={clientRequests}
						/>
						<button
							onClick={addRequest}
							className="px-4 py-2 mt-1 bg-blue-300 hover:cursor-pointer hover:bg-blue-600 hover:text-white rounded-xl"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CustomerCard
