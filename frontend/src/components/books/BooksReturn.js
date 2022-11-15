import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";  
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  


function BookReturn(props) {
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
        BookInfoId: "",
        EmployeeInfoId: "",
        IssuedFrom: "",
        IssuedTo: "",
        ActualReturnDate: "",
        IssuedBy: ""
			};
    const [bookData, setCrud] = useState(initialState);
	const { id } = useParams();
	const navigate = useNavigate();
	const [actualReturnDate, setStartDate] = useState();
	const [BookIssueId, setBookIssueId] = useState();
	const handleFromDate = actualReturnDate => {
		setStartDate(actualReturnDate);

		bookData.ActualReturnDate=actualReturnDate.toISOString().slice(0, 10);
	}
	const isWeekEnd = (actualReturnDate) => {

		let days=actualReturnDate.getDay();
		const day = days;
		return day !== 0 && day !== 6;
	  };
    //const [bookIssueData, setBookIssueData] = useState(bookIssueState);

	useEffect(
		function () {
			async function updateCrud() {
				try {
					const response = await get(`http://localhost:8081/api/books/${id}/return`);
					console.log("response return saagar",response)
					// const response = await get(`/api/cruds/${BookInfoId}`);
					setCrud(response.data[0]);
					setBookIssueId(response.data[0].BookIssueId)
					} catch (error) {
					console.log(error);
				}
			}
			updateCrud();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	function handleSubmit(event) {
		const id=bookData.BookInfoId;
        event.preventDefault();
		async function updateBook() {
			try {
				const response = await patch(`http://localhost:8081/api/books/${id}/status/available`, bookData);
				console.log("status Available response",response.data[0]);
				updateActualReturnDate();
				navigate("/books/mylist");
		  		} catch (error) {
				console.log(error);
			}
		}
		updateBook();
	
		
	}
    function updateActualReturnDate(){
		const id=BookIssueId;
		console.log("actual id",id)
		try {
			const response = patch(`http://localhost:8081/api/books/${id}/acualreturndt`, bookData);
		} catch (error) {
			console.log(error);
		}
	}
	function handleChange(event) {
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		// navigate(`/books/edit/${bookData.BookInfoId}`);
		navigate(`/books/mylist`);
	}

	return (
		<div className="container">
			{/* <h1>Book : {bookData.BookName}</h1>
			<hr /> */}
			<form onSubmit={handleSubmit}>
			<div className="form-group">
					<label>Nmae</label>
					<input disabled="true"
						name="BookName"
						type="text"
						required
						value={bookData.BookName}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Language</label>
					<input
                        disabled="true"
						name="Language"
						type="text"
						required
						value={bookData.Language}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				{/* <div className="form-group">
					<label>BookType</label>
					<input
                    disabled="true"
						name="BookType"
						type="text"
						required
						value={bookData.BookType}
						onChange={handleChange}
						className="form-control"
					/>
				</div> */}
				<div className="form-group">
					<label>Author</label>
					<input
                    disabled="true"
						name="BookAuther"
						type="text"
						required
						value={bookData.BookAuther}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

                <div className="form-group">
					<label>Start Date</label>
					<input
                    disabled="true"
						name="BookAuther"
						type="text"
						required
						value={bookData.IssuedFrom}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
                <div className="form-group">
					<label>End Date</label>
					<input
                    disabled="true"
						name="BookAuther"
						type="text"
						required
						value={bookData.IssuedTo}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
                <div className="form-group" disabled="true">
                <label>Return Date</label>
                	  <DatePicker selected={actualReturnDate}
	  placeholderText="Select Actual Return Date"
	  dateFormat="dd-MM-yyyy"
	  minDate={new Date()}
	  filterDate={isWeekEnd}
	  required
	  onChange={handleFromDate} />
                 </div>
				<div className="btn-group">
					<button type="submit" className="btn btn-primary">
						Return
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default BookReturn;
