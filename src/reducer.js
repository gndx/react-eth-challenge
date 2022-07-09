import getData from './utils/getData';

export const initialState = {
  object: getData('https://mock-api1.herokuapp.com/developer'),
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        object: { ...state.object, action },
      };
    default:
      return state;
  }
};

export default reducer;
