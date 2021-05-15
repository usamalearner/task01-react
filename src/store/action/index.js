
import firebase from '../../config/firebase'


const signUp = (currentUser, allUsers) => {

    return (dispatch) => {

        let users = allUsers.concat([currentUser])

        dispatch({ type: "SETUSERS", payload: users })

    }

}

const signIn = (currentUser) => {

    return (dispatch) => {

        dispatch({ type: "SETCURRENTUSERS", payload: currentUser })

    }

}

const logOut = () => {

    return (dispatch) => {
        let currentUser = [];
        dispatch({ type: "SETCURRENTUSERS", payload: currentUser })

    }

}



const google_login = (history) => {
    console.log("running")
    return (dispatch) => {
        var provider = new firebase.auth.GoogleAuthProvider();


        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;

                let create_user = {
                    firstName: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid,


                }
                // console.log(create_user)


                dispatch({ type: "SETCURRENTUSERS", payload: create_user })
                alert("login successful")
                history.push('/Dashboard')




            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error", errorMessage)
            });

    }
}

export {
    signUp,
    signIn,
    logOut,
    google_login
}