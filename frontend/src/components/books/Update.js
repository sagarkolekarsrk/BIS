import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookUpdate(props) {
	const initialState = {
		BookName: "",
		Language: "",
		BookType: "",
	    BookAuther: "",
		NoCopiesActual: "",
		NoCopiesCurrent: "",
		PublicationYear: "",
		BookCover: "",
		BookDiscription: "",
		BookStatus: "",
		ISBN: "",
			};
	const [bookData, setCrud] = useState(initialState);
	const { id } = useParams();
	const navigate = useNavigate();
	const bookStatus = [
		{ label: "Available", value: 1 },
	    { label: "Not Available", value: 2 },
	  ];

	useEffect(
		function () {
			async function updateCrud() {
				try {
					const response = await get(`http://localhost:8081/api/books/${id}`);
					setCrud(response.data[0]);
					} catch (error) {
					console.log(error);
				}
			}
			updateCrud();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);
	function handleListChange (selectedOption) {
		bookData.BookStatus=selectedOption.label;
			  }
	function handleSubmit(event) {
		event.preventDefault();
		const id=bookData.BookInfoId;
		console.log("is",id)
		async function updateBook() {
			try {
				const response = await patch(`http://localhost:8081/api/books/${id}/update`, bookData);
				navigate(`/books/list`);
			} catch (error) {
				console.log(error);
			}
		}
		updateBook();
	}

	function handleChange(event) {
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		// navigate(`/books/edit/${bookData.BookInfoId}`);
		navigate(`/books/list`);
	}

	return (
		<div className="container top_margin">
			<h1>Edit <span className="book_name">{bookData.BookName}</span></h1>
			<hr />			
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-md-6">
					<div className="form-group">
					<label>Book Name</label>
					<input
						name="BookName"
						type="text"
						required
						value={bookData.BookName}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
					</div>
					<div className="col-md-6">						
						<div className="form-group">
							<label>Language</label>
							<input
								name="Language"
								type="text"
								required
								value={bookData.Language}
								onChange={handleChange}
								className="form-control"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
					<div className="form-group">
					<label>Type</label>
					<input
						name="BookType"
						type="text"
						required
						value={bookData.BookType}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Author</label>
							<input
								name="BookAuther"
								type="text"
								required
								value={bookData.BookAuther}
								onChange={handleChange}
								className="form-control"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
						<label>Actual Copies</label>
						<input
							name="NoCopiesActual"
							type="text"
							required
							value={bookData.NoCopiesActual}
							onChange={handleChange}
							className="form-control"
						/>
						</div>
					</div>
					<div className="col-md-6">
							<div className="form-group">
							<label>Current Copies</label>
							<input
								name="NoCopiesCurrent"
								type="text"
								required
								value={bookData.NoCopiesCurrent}
								onChange={handleChange}
								className="form-control"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
					<div className="form-group">
					<label>Publication Year</label>
					<input
						name="PublicationYear"
						type="text"
						required
						value={bookData.PublicationYear}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
						<label>Book Cover</label>
						<input
							name="BookCover"
							type="text"
							required
							value={bookData.BookCover}
							onChange={handleChange}
							className="form-control"
						/>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
						<label>Description</label>
						<textarea
							name="BookDiscription"
							row="5"
							value={bookData.BookDiscription}
							onChange={handleChange}
							className="form-control"
						/>
					</div>
						</div>
					<div className="col-md-6">
						<div className="form-group">
						<label>Status</label>
						<Select options={ bookStatus } 
							name="BookStatus"
							required
							onChange={handleListChange}
							/>
						</div> 
						</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
						<label>ISBN</label>
						<input
							name="ISBN"
							type="text"
							required
							value={bookData.ISBN}
							onChange={handleChange}
							className="form-control"
						/>
					</div>				
					</div>
					<div className="col-md-6 mt-4">
						<div className="btn-group">
							<button type="submit" className="btn btn-primary">
								Update
							</button>
							<button
								type="button"
								onClick={handleCancel}
								className="btn btn-secondary"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
				
			</form>
		</div>
	);
}

export default BookUpdate;
