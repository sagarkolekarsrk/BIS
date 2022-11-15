import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";
import 'react-dropdown/style.css';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker  from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  
import './Register.css'
import ReactDOM from 'react-dom';

import {useFormik} from 'formik';

import * as yup from 'yup';




function Register(props) {

	const initialState = {
		FirstName: "",
		LastName: "",
		Gender: "",
	    Email: "",
		DOB: "",
		Designation: "",
		Password: "",
		IsAdmin: "",
		};
	const gender = [
		{ label: "Male", value: 1 },
        { label: "Female", value: 2 },
        { label: "Other", value: 3 },
		// { label: "Not Available", value: 2 },
	  ];

      const isAdmin = [
		{ label: "Admin", value: 1 },
        { label: "Employee", value: 0 },
         ];
    const [birthDate, setDOB] = useState();
	const [registerData, setRegister] = useState(initialState);
	const navigate = useNavigate();
	function handleListChange (selectedOption) {
		registerData.IsAdmin=selectedOption.value;
			  }
              function handleGenderChange (selectedOption) {
                registerData.Gender=selectedOption.label;
                      }
              
              const handleDOB = birthDate => {
                setDOB(birthDate);
                registerData.DOB=birthDate.toISOString().slice(0, 10);
            }
	function handleSubmit(event) {
		event.preventDefault();
		console.log("from api/cruds register",registerData)
		//if (!crud.companyName || !crud.email) return;
		async function saveBook() {
			try {
				const response = await post("http://localhost:8081/api/employees/register",registerData);
				console.log("response 2 sagar", response);
				navigate("/login");
				} catch (error) {
				console.log("error", error);
			}
		}
		saveBook();
	}

	
	function handleChange(event) {
		setRegister({ ...registerData, [event.target.name]: event.target.value });
		
	}

	function handleCancel() {
		navigate("/books");
	}

	const formik=useFormik({

		initialValues:{
	
		  Id:'',
		  FirstName:'',
		  LastName:'',	
		  Email:'',
		  birthdate:'',
		  Designation:'',
		  Password:''
	
		},
	
		validationSchema: yup.object({
	
			FirstName: yup.string()
	
			.max(20, 'FirstName should not exceed 20 Characters')
	
			.required('Please Enter Employee Name'),

			LastName: yup.string()
	
			.max(25, 'LastName should not exceed 20 Characters')
	
			.required('Please Enter Employee lastName'),

			Email: yup.string()
			.email('Invalid email address')
			.required('Please Enter Email Id'),
	
		  	EmailId: yup.string()
	
			.email('Invalid email address')
	
			.required('Please Enter Email Id'),


			birthdate: yup.date()
			.max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
			.required("Required"),

			Designation: yup.string()
	
			.max(10, 'Designation should not exceed 20 Characters')
	
			.required('Please Enter Employee Designation'),
			
			Password: yup.string()
			
			.max(8,'Password should not be smaller that 8 Characters')
			.required('Please Enter Password')
	
		}),
	
		onSubmit:values=>{
	
		  alert(JSON.stringify(values));
	
		}

	
	  });
	
	return (
		<div className="container">
			<div className="register_from col-md-8 offset-md-2">
			<h1>Register</h1>
		
			<h3>Create your account</h3>
			<form onSubmit={handleSubmit} >
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label className="control-label">First Name</label>
							<input
								name="FirstName"
								type="text"
								
								value={registerData.FirstName}
								onChange={handleChange}
								className="form-control"
								{...formik.getFieldProps("FirstName")}
							/>
							{formik.touched.FirstName && formik.errors.FirstName ? <span style={{color:'red'}}>{formik.errors.FirstName}</span> : null}
						</div>
					</div>
					<div className="col-md-6">
					<div className="form-group">
						<label className="control-label">Last Name</label>
						<input
							name="LastName"
							type="text"
							
							value={registerData.LastName}
							onChange={handleChange}
							className="form-control"
							{...formik.getFieldProps("LastName")}
						/>
						{formik.touched.LastName && formik.errors.LastName ? <span style={{color:'red'}}>{formik.errors.LastName}</span> : null}
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label className="control-label">Email</label>
							<input
								name="Email"
								type="text"
								
								value={registerData.Email}
								onChange={handleChange}
								className="form-control"
								{...formik.getFieldProps("Email")}
							/>
							{formik.touched.Email && formik.errors.Email ? <span style={{color:'red'}}>{formik.errors.Email}</span> : null}
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
						<label className="control-label">Date Of Birth</label>		
						<DatePicker selected={birthDate}
						dateFormat="dd-MM-yyyy" name="birthdate" className="date_input col-md-12"
						placeholderText="Select End Date"
						onChange={handleDOB} 
						{...formik.getFieldProps("birthdate")}
						/>
						 {formik.touched.birthdate && formik.errors.birthdate ? (<span className={{color:'red'}}>{formik.errors.birthdate}</span>) : null}
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label className="control-label">Designation</label>
							<input
								name="Designation"
								type="text"
								required
								value={registerData.Designation}
								onChange={handleChange}
								className="form-control"
								{...formik.getFieldProps("Designation")}
							/>
							{formik.touched.Designation && formik.errors.Designation ? <span style={{color:'red'}}>{formik.errors.Designation}</span> : null}
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label className="control-label">Password</label>
							<input
								name="Password"
								type="password"
								required
								value={registerData.Password}
								onChange={handleChange}
								className="form-control"
								{...formik.getFieldProps("Password")}
							/>
							{formik.touched.Password && formik.errors.Password ? <span style={{color:'red'}}>{formik.errors.Password}</span> : null}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label className="control-label">Gender</label>
							<Select options={ gender } 
								name="gender"
								required
								onChange={handleGenderChange}
								/>
						</div> 
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label className="control-label">Admin/Emp</label>
							<Select options={ isAdmin } 
								name="isAdmin"
								required
								onChange={handleListChange}
								/>
						</div> 
					</div>
				</div>
				
				<div className="row" >
					<div className="col-md-12 text-end mt-4">
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
					
					
					
					{/* <div className="form-group">
						<label>Date Of Birth</label>
						<input
							name="DOB"
							type="text"
							required
							value={registerData.DOB}
							onChange={handleChange}
							className="form-control"
						/>
					</div> */}
					
					
					
			
					
					
				
		</form>
			</div>
			
		</div>



	);
}

export default Register;
