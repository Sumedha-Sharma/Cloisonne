import React from "react";
import './Login.scss';
const Login=()=>{
    return (
        <div  className="Login">
            <div className="Wrapper">
                <form>
                    <div className="header">
        LOGIN
                    </div>
                    <div className="desc">
                        Please Login to Get Back to Cloisonnè

                    </div>
                    <div className="input">
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />       
                        </div>
                        <div className="forgot">
                            Forgot Your Password?
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Login" />

                    </div>

                    <div className="new-user">
                        New User? Please<span> Register</span> First
                    </div>

                    <div className="logo">
                    Cloisonnè

                    </div>

                </form>

            </div>
          
        </div>
    )
}
export default Login;