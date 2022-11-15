import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'react-dropdown/style.css';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function BookAdd(props) {
	const navigate = useNavigate();
	const initialState = {
		BookName: "",
		Language: "",
		BookType: "",
	    BookAuther: "",
		NoCopiesActual: "",
		NoCopiesCurrent: "",
		PublicationYear: "",
		BookDiscription: "",
		BookStatus: "",
		ISBN: "",
		
	};
	//const [isDisabled, setDisabled] = useState(true);
	const [booksErr,setBookErr]=useState(false);
    const [langErr,setLangErr]=useState(false);
	const [catagoryErr,setCatagoryErr]=useState(false);
	const [authErr,setAuthErr]=useState(false);
	const [actualCopyErr,setActualCopyErr]=useState(false);
	const [currentCopyErr,setCurrentCopyErr]=useState(false);
	const [publicationYrErr,setPublicationYrErr]=useState(false);
	const [bkDiscriptionErr,setDiscriptionErr]=useState(false);
	const [StatusErr,setStatusErr]=useState(false);
	const [ISBNErr,setISBNErr]=useState(false);

	const bookStatus = [
		{ label: "Available", value: 1 },
		// { label: "Not Available", value: 2 },
	  ];
	
	const [bookData, setCrud] = useState(initialState);
	
	function handleListChange (selectedOption) {
		bookData.BookStatus=selectedOption.label;
			  }
	


	function handleName(event){
		console.log(event)
		if(event.target.value.length===0 )
        {
           setBookErr(true)
        }
        else
        {
            setBookErr(false)
        }
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}

	function handleLang(event){
		console.log(event)
		if(event.target.value.length===0)
        {
           setLangErr(true)
        }
        else
        {
            setLangErr(false)
        }
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}
	function handleCatagory(event){
		console.log(event)
		if(event.target.value.length===0 )
        {
           setCatagoryErr(true)
        }
        else
        {
            setCatagoryErr(false)
        }
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}
	function handleAuth(event){
		console.log(event)
		if(event.target.value.length<3 )
        {
           setAuthErr(true)
        }
        else
        {
            setAuthErr(false)
        }
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}
	const validateNumber = (value) => {
		//true for digits only.
	    const regex = /^[0-9]+$/
		return regex.test(value);
	  }

	  const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
	  const blockInvalidCharDescript = e => [ "'" ,'+', '-'].includes(e.key) && e.preventDefault();
	  
	function handleActualCopy(event){
		console.log(event)
		if (!validateNumber(event.target.value)) {
			setActualCopyErr(true);
		  } else {
			setActualCopyErr(false);
		  }
	   
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}
	function handleCurrentCopy(event){
		console.log(event)
		if (!validateNumber(event.target.value)) {
			setCurrentCopyErr(true);
		  } else {
			setCurrentCopyErr(false);
		  }
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}
	function handlePublicationYear(event){
		console.log(event)
		if(event.target.value.length<3 )
        {
           setPublicationYrErr(true)
        }
        else
        {
            setPublicationYrErr(false)
        }
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}

	
	function handleStatus(event){
		console.log(event)
		if(event.target.value.length<3 )
        {
           setStatusErr(true)
        }
        else
        {
            setStatusErr(false)
        }
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}
	function handleDiscription(event){
		
		if(event.target.value.length<50 )
        {
           setDiscriptionErr(true)
        }
        else
        {
            setDiscriptionErr(false)
        }
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}
	function handleISBN(event){
		console.log(event)
		if(event.target.value.length<10 || event.target.value.length>13 )
        {
           setISBNErr(true)
        }
        else
        {
            setISBNErr(false)
        }
		setCrud({ ...bookData, [event.target.name]: event.target.value });
	}
	

	async function handleSubmit(event) {
		event.preventDefault();	
	   if(  booksErr=== false && 
			 langErr=== false && 
			 catagoryErr=== false &&
			 authErr=== false && 
			 actualCopyErr=== false &&
			 currentCopyErr=== false &&
			 bkDiscriptionErr=== false && 
			 ISBNErr=== false){
			async function saveBook() {
				console.log(bookData);
				try {
					const response = await axios.post("http://localhost:8081/api/books/create",bookData);
					navigate("/books/list");
					} catch (error) {
					console.log("error", error);
				}
			}
		await saveBook();
		
		}
			
	}

	// function handleChange(event) {
      
	// 	setCrud({ ...bookData, [event.target.name]: event.target.value });
		
	// }

	function handleCancel() {
		navigate("/books/list");
	}

	return (
		<div className="container add_book" style={{ maxWidth: "900px", marginTop:"92px" }}>
			<h1>Add Books</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className='row'>
                    <div className='col-md-6'>
						<div className="form-group">
							<label>Name</label>
							<input
								name="BookName"
								type="text"
								required
								value={bookData.BookName}
								autoComplete="off"
								onChange={handleName}
								className="form-control"
							/>
							 {booksErr?<span  style={{color: "red"}}>Book field is required</span>:""}
						</div>
					</div>
					<div className='col-md-6'>
						<div className="form-group">
							<label>Language</label>
							<input
								name="Language"
								type="text"
								required
								value={bookData.Language}
								autoComplete="off"
								onChange={handleLang}
								className="form-control"
							/>
							 {langErr?<span style={{color: "red"}} >Language field is required</span>:""}
						</div>
					</div>
				</div>
				<div className='row'>
                    <div className='col-md-6'>
						<div className="form-group">
							<label>Category</label>
							<input
								name="BookType"
								type="text"
								required
								autoComplete="off"
								value={bookData.BookType}
								onChange={handleCatagory}
								className="form-control"
									/>
									 {catagoryErr?<span style={{color: "red"}}>Catagoory field is required</span>:""}
					</div>
					</div>
					<div className='col-md-6'>
						<div className="form-group">
							<label>Author</label>
							<input
								name="BookAuther"
								type="text"
								required
								autoComplete="off"
								value={bookData.BookAuther}
								onChange={handleAuth}
								className="form-control"
							/>
							 {authErr?<span style={{color: "red"}}>Author field is required</span>:""}
					</div>
					</div>
				</div>
				<div className='row'>
                    <div className='col-md-6'>
						<div className="form-group">
							<label>Actual Copies </label>
							<input
								name="NoCopiesActual"
								pattern="^[0-9]*[.,]?[0-9]*$"
								type="number"
								required
								autoComplete="off"
								value={bookData.NoCopiesActual}
								onKeyDown={blockInvalidChar}
								onChange={handleActualCopy}
								className="form-control"
							/>
							{actualCopyErr?<span style={{color: "red"}}>Copies field should not be minus or blank</span>:""}
						</div>
					</div>
					<div className='col-md-6'>
						<div className="form-group">
							<label>Current Copies </label>
							<input
								name="NoCopiesCurrent"
								pattern="^[0-9]*[.,]?[0-9]*$"
								type="number"
								required
								autoComplete="off"
								value={bookData.NoCopiesCurrent}
								onKeyDown={blockInvalidChar}
								onChange={handleCurrentCopy}
								className="form-control"
							/>
							{currentCopyErr?<span style={{color: "red"}}>Current copies field should not be minus or blank</span>:""}
					</div>
					</div>
				</div>
				<div className='row'>
                    <div className='col-md-6'>
						<div className="form-group">
							<label>Publication Year</label>
							<input
								name="PublicationYear"
								type="date"
								dateFormat="dd-MM-yyyy"
								required
								autoComplete="off"
								value={bookData.PublicationYear}
								onChange={handlePublicationYear}
								className="form-control"
							/>
					</div>
					</div>
					<div className='col-md-6'>
						<div className="form-group">
								<label>Status</label>							
							<Select options={ bookStatus } 
								name="BookStatus"
								autoComplete="off"
								required
								onChange={handleListChange}
								/>
						</div> 
					</div>
				</div>
				<div className='row'>
                    <div className='col-md-6'>
						<div className="form-group">
							<label>Description</label>
							<input
								name="BookDiscription"
								type="text"
								required
								autoComplete="off"
								value={bookData.BookDiscription}
								onKeyDown={blockInvalidCharDescript}
								onChange={handleDiscription}
								className="form-control"
							/>
							{bkDiscriptionErr?<span style={{color: "red"}}>Description should be grather than 20 charactor</span>:""}
						</div>
					</div>
					<div className='col-md-6'>						
						<div className="form-group">
							<label>ISBN</label>
							<input
								name="ISBN"
								pattern="^[0-9]*[.,]?[0-9]*$"
								type="number"
								required
								autoComplete="off"
								value={bookData.ISBN}
								onKeyDown={blockInvalidChar}
								onChange={handleISBN}
								className="form-control"
							/>
							{ISBNErr?<span style={{color: "red"}}>ISBN number between 10 to 13 digitss only</span>:""}
						</div>
					</div>
				
				</div>
				<div className='row'>
                  
					<div className='col-md-6 mt-4 text-end'>
						<div className="btn-group">
							<input type="submit" value="Submit" className="btn btn-primary" />
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

export default BookAdd;
