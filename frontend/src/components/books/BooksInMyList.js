import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function BooksInmyList() {
	const [booksData, setCruds] = useState([]);

	useEffect(function () {
		async function getBooks() {
			try {
				const response = await axios.get("http://localhost:8081/api/books/issue/mylist");
				setCruds(response.data);
				
			} catch (error) {
				console.log("error", error);
			}
		}
		getBooks();
	}, []);

	return (
		<div className="container" style={{ marginTop:"92px" }}>
			<div>
				<h2>My List</h2>
				<hr />
			</div>
		
            <div className="table-responsive bg-white">
			<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr className="font_14">
						<th>Book</th>
						<th>Language</th>
						<th>Author</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{booksData &&
						booksData.map((item) => {
							return (
								<tr key={item.BookInfoId} className="font_14">
									<td>{item.BookName}	</td>
									<td>{item.Language}</td>
									<td>{item.BookAuther}</td>								
									<td>
										<Link
											to={`/books/${item.BookInfoId}/return`}
											className="btn btn-info"
										>
											Return
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			</div>
		</div>
	);
}

export default BooksInmyList;
