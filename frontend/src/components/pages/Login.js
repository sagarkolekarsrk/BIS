import React,{ useState, useEffect } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Routes, Route, useNavigate, redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from "axios";
import { faCoffee,faUser,faEnvelope,faCalendarDays,faBars,faLock, faL } from '@fortawesome/free-solid-svg-icons'
import { ReactSession }  from 'react-client-session';


function Login(){
    //redirect to login page
    const navigate = useNavigate();
    const [credentialsErr,setCredentials]=useState(false);
    const [inputValues, setInputValue] = useState({
        Email: "",
        Password: "",
        });
    
        //for Toaster

    const diffToast = () => {
            toast.success("Login Sucessfully!",{
            position:"bottom-right" ,
            theme:"colored"
      });

    }
      //handle submit updates
      function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
      }
    
      function register(){
        navigate("/register");
      }
    //   function loginSuccesss(){
    //     setInputValue('');
        
    //     navigate("/books/mylist");

    //   }
    function handleSubmit(event) {
        event.preventDefault();
        console.log("inputValues",inputValues)
        async function authUser() {
			try {
               
		        const response =await axios.post("http://localhost:8081/api/employees/auth/login",inputValues);
				const res=response.data;
                if(res=="" || inputValues.Email==="" || inputValues.Password==="" || response.data==="" || response.data.Email==="" ){
                    setCredentials(true)
                }else{
                    setCredentials(false)                    
                 navigate("/books/list");
                }
               
            } catch (error) {
				console.log("error", error);
			}
           // return response
		}
    
  
		authUser();
 
	}

    return(
        <form  onSubmit={handleSubmit} >
        <div className="login_form" id="login">
          <div className="modal-dialog" style={{maxWidth:400}}>
            <div className="modal-content">   
              <div className="modal-header p-2">
                <h4 className="modal-title font_19 px-4">Login Form</h4>
                <button type="button" className="btn-close pr-5" data-bs-dismiss="modal"></button>
              </div>         
              <div className="modal-body pb-3">
              <form className='px-4' > 
                <div className='row'>
                    <div className='col-md-12'>
                        <label className="control-label">User Name</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser} /></span>
                                <input type="email" 
                                className="form-control" 
                                name="Email"
								required
								placeholder="Email"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.Email}
                                />
                                {/* <span style={{color: "red"}}>{emailErr}</span> */}
                                {/* {emailErr?<span style={{color: "red"}}>Email not match</span>:""} */}
                                {/* <span> {validations.Email && <p>{validations.Email}</p>}</span> */}
                            </div>
                            
                    </div>  
                    <div className='col-md-12'>
                        <label className='control-label'>Password</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLock} /></span>
                                <input type="Password"
                                className="form-control"
                                placeholder="Password"
                                name="Password"
								required
								aria-label="Username" aria-describedby="basic-addon1" 
                                   onChange={(e) => handleChange(e)}
                                   value={inputValues.Password}
                                   
                                   />
                                    {/* {passErr?<span style={{color: "red"}}>Password not match</span>:""} */}
                          </div>    
                   </div>                                                           
                </div>  
                <div style={ {textAlign: 'center'}}>
                {credentialsErr?<span style={{color: "red"}}>Invalid Credential</span>:""}
                </div>

                <div className='row'>
                    <h6 className='text-center text_blue register_text' onClick={register}>
                      New user? Register now.</h6>                  
                </div>  
                {/* <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">Save </button>         */}
                </form>
            </div>
        
             
           <div className="modal-footer pb-3 px-4">
               {/* <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">Login </button> */}
               <input type="submit" value="Login" className="btn btn-danger font-13 px-3" onClick={diffToast}  data-bs-dismiss="modal"/>
                <button type="button" style={{ marginLeft:"6px"}} className="btn btn-danger font-13 px-3" data-bs-dismiss="modal">Cancel</button>
              
            </div>
        
           </div>
          </div>
         </div>
         </form>
       
    )
}
export default Login;