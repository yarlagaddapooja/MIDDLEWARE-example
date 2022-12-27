const { combineReducers } = require("redux");

const INITIAL_STATE = {
	todo: null
}

const dataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_DATA':
			console.log("add_data")
			return { ...state, todo: action.payload };
		case 'DELETE_DATA' :
			console.log("delete_data")
			return INITIAL_STATE
			default:return state;

			};

		
		//dispatch({ type: DELETE_DATA, payload:id });

		// case 'DELETE_DATE': {
		// 	console.log("delete_data")

		// 	return {
		// 		list: state.list.filter((it) => {
		// 			return action.id !== it.id;
		// 		}),
		// 	}
		// }
		// default: return state;
	}


const reducers = combineReducers({
	data: dataReducer
})

export default reducers
