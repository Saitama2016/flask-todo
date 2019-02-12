import { bindActionCreators } from "../../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux";

const userReducerDefaultState = {
    name: '',
    email: '',
    token: null,
    refresh: null
};

export default (state = userReducerDefaultState) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                ...action.user
            };
        case 'CLEAR_USER':
            return userReducerDefaultState;
        default:
            return state;
    }
}