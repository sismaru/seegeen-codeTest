const SET = 'data/SET';

export const setData = (data) => ({
	type: SET,
	payload: data,
});

function list(state = {}, action) {
	switch (action.type) {
		case SET:
			return { data: (state.data = action.payload) };
		default:
			return state;
	}
}

export default list;