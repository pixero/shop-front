
export const AUTH_USER = "AUTHENTICATE_USER";
export const UPDATE_PASSWORD_USER = "UPDATE-PASSWORD-USER";
export const UPDATE_NAME_USER = "UPDATE-NAME-USER";
export const UPDATE_MESSAGE = "UPDATE-MESSAGE";
export const AUTH_POST_REQUEST = "AUTH-POST-REQUEST";
export const REQUST_REFRESH_TOKEN = "REQUST_REFRESH-TOKEN";


const initialState = {
    name: ''
}

export const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}