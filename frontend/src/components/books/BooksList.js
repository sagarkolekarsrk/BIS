import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEye,faPenToSquare,faTrash} from '@fortawesome/free-solid-svg-icons'

function CrudTable() {
	const [booksData, setCruds] = useState([]);

	useEffect(function () {
		async function getBooks() {
			try {
				const response = await axios.get("http://localhost:8081/api/books/list");
				
				setCruds(response.data);
				
			} catch (error) {
				console.log("error", error);
			}
		}
		getBooks();
	}, []);

	

	return (
		<div className="container" style={{ marginTop:"92px" }} >
			<div>
				<h2>
					Books List
					<p>
						<Link to="/books/create" className="btn btn-primary float-right">
							Create Books
						</Link>
					</p>
				</h2>
				<hr />
			</div>

			<div className="bg-white">
			<div className="table-responsive">
				<table className="table riped table-striped table-hover table-bordered container">
					<thead>
						<tr className="font_14">
							<th>Name</th>
							<th>Language</th>
							<th>Type</th>
							<th>Author</th>
							<th>Actual Copies</th>
							<th>Current Copies</th>
							<th>Publication <br/>Year</th>
							{/* <th>Book<br/>Cover</th> */}
							{/* <th>Book<br/>Discription</th> */}
							<th>Book<br/>Status</th>
							<th>ISBN</th>
							<th>View</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
				<tbody>
					{booksData &&
						booksData.map((item) => {
							return (
								<tr key={item.BookInfoId} className="font_14">
									<td>
									{item.BookName}
										{/* <Link to={`/cruds/${crud._id}`} className="link-line">
											{crud.companyName}
										</Link> */}
									</td>
									<td>{item.Language}</td>
									<td>{item.BookType}</td>
									<td>{item.BookAuther}</td>
									<td>{item.NoCopiesActual}</td>
									<td>{item.NoCopiesCurrent}</td>
									<td>{item.PublicationYear}</td>
									{/* <td>{item.BookCover}</td> */}
									{/* <td>{item.BookDiscription}</td> */}
									<td><span className="font-14" style={item.BookStatus==="Available" ? null:{pointerEvents: "none" , color: 'red'} }>{item.BookStatus}</span></td>
									<td>{item.ISBN}</td>
									<td>
										<Link to={`/books/${item.BookInfoId}`} className="btn btn-warning fa-sm text-white px-2 py-1">
											{/* View */}
											<FontAwesomeIcon icon={faEye} />
										</Link>
									</td>
									<td>
										<Link
											to={`/books/${item.BookInfoId}/edit`}
											className="btn btn-success fa-sm text-white px-2 py-1"
										>
											{/* Edit */}
											<FontAwesomeIcon icon={faPenToSquare}/>
										</Link>
									</td>
									<td>
										<Link
											to={`/books/${item.BookInfoId}/delete`}
											className="btn btn-danger fa-sm text-white px-2 py-1"
										>
											{/* Delete */}
											<FontAwesomeIcon icon={faTrash}/>
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
				</table>
			</div>
			</div>
           
		</div>
	);
}

export default CrudTable;
