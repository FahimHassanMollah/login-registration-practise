const authState = {
    isLoggedIn: false,
    user: {
        name: "",
        email: "",
        phone: "",
        street: "",
        state: "",
        city: "",
        zip_code: "",
    }
}

export const authReducer = (state = authState, { type, payload }) => {
    switch (type) {

        case "typeName":
            return { ...state, ...payload }

        default:
            return state
    }
}
