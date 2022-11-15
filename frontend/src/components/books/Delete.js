import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CrudDelete(props) {
	const [book, setCrud] = useState({});

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function deleteBookById() {
				try {
					const response = await axios.get(`http://localhost:8081/api/books/${id}`);
					setCrud(response.data[0]);
				} catch (error) {
					console.log("error", error);
				}
			}
			deleteBookById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`http://localhost:8081/api/books/${id}/delete`);
			navigate("/books/list");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container top_margin">
			<table>
				<tr>
					<td className="bookdetail_heading py-2">Name</td><td>{book.BookName} </td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Language</td><td> {book.Language} </td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Type</td><td>{book.BookAuther}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Author</td><td> {book.BookAuther}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Actual Copies </td><td>{book.NoCopiesActual}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Current Copies </td><td>{book.NoCopiesCurrent}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Publication Year</td><td>{book.PublicationYear}</td>
				</tr>
				{/* <tr>
					<td className="bookdetail_heading py-2">BookCover</td><td>{book.BookCover}</td>
				</tr> */}
				<tr>
					<td className="bookdetail_heading py-2">Description</td><td>{book.BookDiscription}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Status</td><td>{book.BookStatus}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">ISBN</td><td>{book.ISBN}</td>
				</tr>
			</table>
			<div className="btn-group">
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/books/list" className="btn btn-secondary">
					Cancel{" "}
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default CrudDelete;
