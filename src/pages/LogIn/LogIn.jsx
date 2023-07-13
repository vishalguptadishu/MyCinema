import { useState } from "react"
import './LogIn.css'
const LogIn = ()=>{
    
    let [email , setemail]=useState()
    let [Password , setPassword]=useState()

    
    function handallogin() {
        let user_obj = JSON.parse(localStorage.getItem("alluser_info") || "[]");

        let loginSuccessful = false;
        for (const user of user_obj) {
            if (user.email === email && user.Password === Password) {
                loginSuccessful = true;
                break;
            }
        }

        if (loginSuccessful) {
            alert("Login Successful!");
        } else {
            alert("Invalid Email or Password.");
        }
    }

    return (
        <div className="LogIn" >
        <label htmlFor="">Email</label>
        <label htmlFor="Email"></label>
        <input type="text" placeholder="Email ID" onChange={(e)=>{setemail(e.target.value)}} />
        <label htmlFor="">Password</label>
        <input type="Password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
        <button onClick={handallogin} >Log In</button>
        </div>
    )
}
export default LogIn;