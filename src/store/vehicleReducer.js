const initialState = {
    message: '',
    vehicles: [],
    vehicle: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_VEHICLE":
            return { ...state, message: payload.message, vehicles: state.vehicles };
        case "FETCH_VEHICLES":
            return { ...state, vehicles: payload };
        case "DELETE_VEHICLE":
            return { ...state, message: payload.message };
        case "UPDATE_VEHICLE":
            return { ...state, message: payload.message, vehicles: state.vehicles };
        case "VIEW_VEHICLE_ID":
            return { ...state, vehicle: payload };
        default:
            return state
    }
}

export default reducer;