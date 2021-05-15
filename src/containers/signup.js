import { useState } from "react";
import { useForm } from "react-hook-form";
import { signUp } from "../store/action";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import './signup.css'
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

function SignUp(props) {
  const { users, sign_up } = props;
  let history = useHistory();
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {

    let a = 0;
    if (users.length === 0) {
      a = 1;
    }
    else {
      for (var i = 0; i < users.length; i++) {
        if (users.length > 0) {
          console.log(a)
          if (users[i].email === data.email) {
            console.log("check", users[i].email, data.email)
            a = 0;
            break;

          }
          else {
            console.log("check2", users[i].email, data.email)

            a = 1;

          }

        }

      }
    }



    if (a === 1) {
      sign_up(data, users)
      // alert("User Email not Exist")
      history.push("/login")
    } else {
      alert("User Email Already Exist")
    }

  }




  return (
    <div>


      <div className="signup-parent ">
        <br>
        </br>
        <div className="signup-container">
          <h1>Sign UP</h1>

          <form
            name="signup-form"
            className="signup-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <br />
            <fieldset>
              <legend className="shipping-address">User Info</legend>
              <input
                minLength="3"
                type="text"
                name="first_name"
                autoFocus
                ref={register}
                required
                placeholder="First Name"
              />
              <input
                minLength="3"
                type="text"
                name="last_name"
                ref={register}
                required
                placeholder="Last Name"
              />
              <input
                minLength="4"
                type="text"
                name="address"
                ref={register}
                required
                placeholder="Address"
              />
              <input
                type="email"
                name="email"
                ref={register}
                required
                placeholder="Email"
              />
              <input
                minLength="11"
                type="number"
                name="phoneNo"
                maxLength={13}

                ref={register}
                required
                placeholder="Phone Number"
              />
              <input
                minLength="8"
                type="password"
                name="password"
                ref={register}
                required
                placeholder="Password"
              />
              <input
                minLength="3"
                type="text"
                name="city"
                ref={register}
                required
                placeholder="City"
              />
              <input
                minLength="3"
                type="text"
                name="state"
                ref={register}
                required
                placeholder="State/Province/Region"
                size="100%"
              />
              <input
                minLength="3"
                type="number"
                name="zip_code"
                maxLength={5}
                size={5}
                max="99999"
                min="00001"
                ref={register}
                required
                placeholder="Zip Code"
              />
              <input
                minLength="3"
                type="text"
                name="country"
                ref={register}
                required
                placeholder="Country"
              />

              <br />
              <br />
              <FormControlLabel
                ref={register}
                control={<Checkbox required name="payment_method" />}
                label={
                  <span style={{ fontSize: "1.2rem" }}>
                    Agree to the terms and continue sign up
                </span>
                }
              />
              <br />
              <Link to="/login">
                <Button
                  className="signup-btn"
                  variant="contained"
                  type="button"
                  color="primary"
                >
                  Sign In
              </Button>
              </Link>
              <Button
                variant="contained"
                className="signup-btn"
                type="submit"
                color="secondary"
              >
                Submit and Sign Up
            </Button>
            </fieldset>
          </form>

        </div>
        <br></br>
        <br>
        </br>
      </div>

    </div>
  )


}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  sign_up: (data, users) => dispatch(signUp(data, users)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)