import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import './index.css'

function BookDetails(props) {
	const [book, setCrud] = useState({});
	//const { BookInfoId } = this.props.match.params;
	
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function getBookById() {
				try {
					const response = await axios.get(`http://localhost:8081/api/books/${id}`);
					console.log("response Details",response);
					setCrud(response.data[0]);
				} catch (error) {
					console.log("error", error);
				}
			}
			getBookById();
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
			<h2 className="book_name">{book.BookName}</h2>	
			<table className="table-borderless">
				<tr>
					<td className="bookdetail_heading py-2">Language</td> <td> {book.Language}</td>

				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Type </td> <td>{book.BookType}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Author </td> <td>{book.BookAuther}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Actual Copies  </td> <td>{book.NoCopiesActual}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Current Copies</td> <td>{book.NoCopiesCurrent}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Publication Year </td> <td>{book.PublicationYear}</td>
				</tr>
				{/* <tr>
					<td className="bookdetail_heading py-2">BookCover </td> <td>{book.BookCover}</td>
				</tr> */}
				<tr>
					<td className="bookdetail_heading py-2">Status </td> <td>{book.BookStatus}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">ISBN </td> <td>{book.ISBN}</td>
				</tr>
				<tr>
					<td className="bookdetail_heading py-2">Description</td><td>{book.BookDiscription}</td>
				</tr>
				

			</table>
			{/* for old code ---------------------------------- */}
			{/* <p>
				<span className="bookdetail_heading">Language</span> <span> {book.Language}</span> 
			</p>

			<p>
			<span className="bookdetail_heading">Book Type </span> <span> {book.BookType}</span>
			</p>
			<p>
				<b>Book Auther</b>: {book.BookAuther}
			</p>
			<p>
				<b>Number Of Copies Actual</b>: {book.NoCopiesActual}
			</p>
			<p>
				<b>Number Of Copies Current</b>: {book.NoCopiesCurrent}
			</p>
			<p>
				<b>Publication Year</b>: {book.PublicationYear}
			</p>
			<p>
				<b>BookCover</b>: {book.BookCover}
			</p>
			<p>
				<b>Book Discription</b>: {book.BookDiscription}
			</p>
			<p>
				<b>Book Status</b>: {book.BookStatus}
			</p>
			<p>
				<b>ISBN</b>: {book.ISBN}
			</p> */}
			
		
			{/* <p>
				<b>Description</b>: <p align="justify">{book.BookDiscription}</p>
			</p>
			<p>
				<small>
					<b>ID</b>: {book.BookInfoId}
				</small>
			</p> */}
			<div className="btn-group ">
				<Link to={`/books/${book.BookInfoId}/edit`} className="btn btn-primary">
					Edit
				</Link>
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/books/list" className="btn btn-secondary">
					Close
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default BookDetails;
