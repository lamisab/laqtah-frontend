import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// import './styles/index1.css';


interface UserProps {
    email: string;
  }


    export function SignUp() {

        const [user, setUser] = useState<UserProps>();
        const [email,setEmail]=useState<string>("");
        const [password,setPassword]=useState<string>("");
        const [error,setError]=useState<string>("");

        const handleemailChange =(e:any) => {
            setEmail( e.target.value);
           
          };

          let handleChange = (e :any)=> {
            console.log("handle change is triggering", e.target.value);
            setPassword(e.target.value);
          };



        function SubmitButton(e:any){
            if ( email &&password.length>10){
              
              return <button type="button" className="log-btn">Sign in</button>
            } else {
              return <button type="button" disabled className="log-btn">Sign in</button>
            };
          };
         

        return (
       
       
    <div id="wrapper">
        <div >
        <div className="imges-log1">
                {/* <div className="header">
                <img src="https://cdn.discordapp.com/attachments/991974904587091968/1004297290237870161/image0.jpg" alt="" />
      
    </div>  */}
        </div>
        </div>
        <div>
      <><div className="main-content">
            <div className="header">
            <h1 className="log">Laqtah</h1>
           
            </div>
            <br/>
            <form >
            <div className="l-part" >
          <input className="input-1" type="email" name="Email"placeholder=' Email'   onChange={handleemailChange}/>
          {email.includes('@') && email.slice(-4).includes('.com')
    ? <p>  valid </p>
    : <p>*should contain (@,.com) </p>}
          
      
        
                

                <div className="overlap-text">
                <input className="input-2" type="password" name="pass"placeholder='Password' required onChange={handleChange} />
        {password.length >10 ? <p> valid </p>: <p> * password should be more than 10</p>}
       
                    
                </div>
              
<br/>

                <div className="check">
               {/* <input type="option" name="checkbox" id="checkbox" /> */}
               <select>
               <label  className="check-h1" htmlFor="option">option:         
</label>
{/* <option value="0">Option:</option> */}
<option value="1">Client</option>
<option value="2">Admin</option>
</select>

           </div>
           <br/>

           {/* <label  className="check-h1" htmlFor="checkbox">Remember me */}
           
           

           
           <Link to={"/"}><SubmitButton/> </Link>
                
                
        <div className="separator">
      <div className="line"></div>
      <p>📷</p>
      <div className="line"></div>
    </div>
    
    
                  <a  className="check-h1" href="https://www.iheart.com/podcast/">Forgot Password?</a>
            </div> </form>
        </div>
        
        <div className="sub-content-log ">
                <div className="s-part">
                
Already have an account?  <Link to={"/login"}> Login</Link>
                </div>
                
            </div></>
            
            
            </div>
            
            </div>
    
          
    
        );
    }