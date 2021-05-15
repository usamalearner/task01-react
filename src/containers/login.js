import { useState } from "react";
import { connect } from "react-redux"
import { Link, useHistory } from "react-router-dom";
import { google_login, signIn } from "../store/action";
import './login.css'
// import GoogleLogin from 'react-google-login';

function Login(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useHistory()
  const { users, login } = props;
  const handleClick = () => {
    let currentUser = [];
    let flag = 0;
    for (var i = 0; i < users.length; i++) {

      if (users[i].email === email && users[i].password === password) {
        // console.log("check", users[i].email, email)
        flag = 1;
        login(users[i])
        history.push(`/Dashboard`, email);
        break;

      }
      else {
        // console.log("check2", users[i].email, email)
      }



    }
    if (flag === 0) {
      alert("Enter Correct Email Or Password!!")
    }


    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = ""),
    )



  }



  return (
    <div className="admin">
      <div className="loginmain">
        <div className="bg-img">
          <div className="contentlogin">
            <header className="headerlogin">Login Form</header>
            <div className="formlogin" >
              <div className="field">
                <span />
                <input className="inputadmin" type="text" onChange={(e) => setEmail(e.target.value)} required placeholder="Email or Phone" />
              </div>
              <div className="field space">
                <span />
                <input type="password" className="pass-key inputadmin" required onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

              </div>
              <div className="pass">
                <a href="#">Forgot Password?</a>
              </div>
              <div className="field">
                <input className="inputadmin" type="submit" onClick={handleClick} defaultValue="LOGIN" />
              </div>
            </div>
            <div className="login">Or login with</div>
            <div className="links">
              <div className="facebook">
                <span>Facebook</span>
              </div>
              <div onClick={() => props.google_login(history)} className="google">
                <span>Google</span>
              </div>
            </div>
            <div className="signup">Don't have account?
              <a href="#" ><Link to="signup">Signup Now</Link></a>
            </div>
          </div>
        </div>
      </div>
    </div>


  )

}
const mapStateToProps = (state) => ({
  users: state.users,

})

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(signIn(data)),
  google_login: (history) => dispatch(google_login(history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)