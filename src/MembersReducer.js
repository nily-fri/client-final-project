const MembersReducer = (state = { members: [] }, action) => {
	switch (action.type) {
		case "LOADMEMBERS":
			return { ...state, members: action.payload };

		default:
			return state;
	}
};

export default MembersReducer;
