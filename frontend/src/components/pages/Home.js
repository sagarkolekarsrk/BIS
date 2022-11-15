import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './common.css'

function Home() {

		const myStyle={
			 backgroundImage: "url(/homebg2.png)",
			 height:'100vh',
			 marginTop:'-70px',
			 fontSize:'50px',
			 backgroundSize: 'cover',
			 backgroundRepeat: 'no-repeat',
		 };
		
// 	const link = "https://henok.us";
// 	const target = "_blank";

// 	return (
// 		<div className="container">
// 			<h1>MERN Stack CRUD</h1>
// 			<p>
// 				<b>Front-end</b>: React.js v17+ 
// 			</p>
// 			<p>
// 				<b>Back-end</b>:  Express.js
// 			</p>
// 			<p>
// 				<b>Database</b>: SQL DB
// 			</p>
// 			<p>
// 				<b>Developed By</b>: Sagar Kolekr and Sheeal Lokhande
// 				<p>
// 					<a href={link} target={target}>
// 						www.alveosoftware.com
// 					</a>
// 				</p>
// 			</p>
// 		</div>
// 	);
// }
const [data, setCruds] = useState([{"Book_Id":1004,"BookName":"Wing Of Fire","Language":"English","Book_Type":"Pdf","Book_Auther":"Abdul Kalam","No_Copies_Actual":5,"No_Copies_Current":2,"Publication_year":1999,"BookCover":"test","BookDiscription":"Wings","BookStatus":"Availabe"},
									   {"Book_Id":1005,"BookName":"Raja-Yoga","Language":"Hindi","Book_Type":"Pdf","Book_Auther":"Swami Vivekananda","No_Copies_Actual":1,"No_Copies_Current":1,"Publication_year":1986,"BookCover":"test","BookDiscription":"Raja Yoga contains transcripts of lectures by Vivekananda on Raja Yoga","BookStatus":"Availabe"},
									   {"Book_Id":1006,"BookName":"The Bright Hour: A Memoir of Living and Dying","Language":"English","Book_Type":"Pdf","Book_Auther":"Nina Riggs","No_Copies_Actual":10,"No_Copies_Current":10,"Publication_year":2018,"BookCover":"test","BookDiscription":"Stunning…heartrending…this year’s When Breath Becomes Air","BookStatus":"Availabe"}]);
	// const loadData=async()=>{
	// 	const response=await axios.get("http://localhost:8080/api/getAllBooks");
	// 	console.log("sagar",response);
	// 	setCruds(response.data)
	// }
	// 	useEffect(()=>{
	// 		loadData();
	// 	},[]);


return (
	<div className="top_margin" style={myStyle} >

		<h1 style={{textAlign:"center"}}>ALVEO SOFTWARE PVT. LTD.</h1>
		{/* <table className="styled-table">
		<thead>
			<tr>
				<th style={{textAlign:"center"}}>Book Name</th>
				<th style={{textAlign:"center"}}>Language</th>
				<th style={{textAlign:"center"}}>Book Type</th>
				<th style={{textAlign:"center"}}>Auther</th>
				<th style={{textAlign:"center"}}>No of Copies</th>
				<th style={{textAlign:"center"}}>No of Copies Current</th>
				<th style={{textAlign:"center"}}>Publication year</th>
				<th style={{textAlign:"center"}}>Book Cover</th>
				<th style={{textAlign:"center"}}>Discription</th>
				<th style={{textAlign:"center"}}>Book Status</th>
				<th style={{textAlign:"center"}}>Action</th>
			</tr>
		</thead>	
		<tbody>
			{data.map((item,index)=>{
				return(
					<tr key={item.Book_Id}>
						<th scope="row">{index+1}</th>
						<td>{item.BookName}</td>
						<td>{item.Language}</td>
						<td>{item.Book_Type}</td>
						<td>{item.Book_Auther}</td>
						<td>{item.No_Copies_Actual}</td>
						<td>{item.No_Copies_Current}</td>
						<td>{item.Publication_year}</td>
						<td>{item.BookCover}</td>
						<td>{item.BookDiscription}</td>
						<td>{item.BookStatus}</td>
						<td>
						<Link to={`/cruds/${item.Book_Id}/edit`}
											className="btn btn-primary"
										>	
																			
					    </Link>
						</td>
					</tr>
				)

			}) }
			</tbody>		

		</table> */}
	</div>
)}


export default Home;
