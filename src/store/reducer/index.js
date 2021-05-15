const INITIAL_STATE = {
    users: [],
    current_user: {

    }
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "SETCURRENTUSERS":
            return ({
                ...state,
                current_user: action.payload
            })

        case "SETUSERS":
            return ({
                ...state,
                users: action.payload
            })
    }
    return state;

}