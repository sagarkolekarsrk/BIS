import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { text } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faBook} from '@fortawesome/free-solid-svg-icons'
import './index.css'


function CrudTable() {
	const [booksData, setCruds] = useState([]);
	const [empData, setEmpData] = useState([]);
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
	
	useEffect(function () {
		async function getEmpName() {
			try {
				const response = await axios.get("http://localhost:8081/api/books/employees/empname");
				
				setEmpData(response.data);
				console.log(response.data)
							
			} catch (error) {
				console.log("error", error);
			}
		}
		getEmpName();
	}, []);
	
	// Match employee name with Book id which employee issued that book
	let merged = [];

	for(let i=0; i<booksData.length; i++) {
	  merged.push({
	   ...booksData[i], 
	   ...(empData.find((itmInner) => itmInner.BookInfoId === booksData[i].BookInfoId))}
	  );
	}
	
	console.log(merged);
   	return (
		<div className="container top_margin">
			<div>
				<h2>
					 Issue Books
					{/* <p>
						<Link to="/book/new" className="btn btn-primary float-right">
							Create Book
						</Link>
					</p> */}
				</h2>
				<hr />
			</div>
		
            <div className="table-responsive bg-white">
			<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr className="font_14">
						<th className="font_14">Name</th>
						<th className="font_14">Language</th>
						<th className="font_14">Type</th>
						<th className="font_14">Author</th>
						<th className="font_14">Actual Copies</th>
						<th className="font_14">Current Copies</th>
						<th className="font_14">Publication<br/>Year</th>
						{/* <th className="font_14">Book<br/>Cover</th> */}
						<th className="font_14">Issued<br/>By</th>
						{/* <th>BookDiscription</th> */}
						<th className="font_14">Status</th>
						<th className="font_14">ISBN</th>
						<th className="font_14">Action</th>
						{/* <th>Return</th> */}
						{/* <th>Delete</th> */}
					</tr>
				</thead>
				<tbody>
					{	merged &&
						merged.map((item) => {
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
									<td>{<span  style={{ color: 'blue' ,fontWeight: '300',fontSize: '12px'}}>{item.FirstName ? item.FirstName : 'NA'} {item.LastName}</span>}</td>
									{/* <td>{item.BookDiscription}</td> */}
									<td><span style={item.BookStatus==="Available" ? null:{pointerEvents: "none" , color: 'red'} }>{item.BookStatus}</span><br/></td>
									<td>{item.ISBN}</td>
									<td>										
										<Link to={`/books/${item.BookInfoId}/details`}  className="btn issue_btn text-white font-13" style={item.BookStatus==="Available" ? null:{pointerEvents: "none" ,background: 'red'} }>
											Issue Book <FontAwesomeIcon icon={faBook} />
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

export default CrudTable;
