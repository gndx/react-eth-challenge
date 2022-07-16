export const dataReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET-DATA':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
}

export default dataReducer;