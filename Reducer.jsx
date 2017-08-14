import {ADD_WORK} from './Actions.js';

const initialState = {
	data:[{
		text:"sample data 1"

	},{
		text:"sample data 2"
	}]
}

function WorkApp(state=initialState,action) {
	// body...
	let nextState = {};
	nextState.data=[];
	state.data.forEach(function(item) {
		nextState.data.push(item);
	})

	switch(action.type) {
		case ADD_WORK:
			nextState.data.push({text:action.text});
			return Object.assign({},state,{
				data:nextState.data
			})

		default:
			return state;
	}
}

export default WorkApp;
