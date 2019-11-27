import { SWTICH_LOCATION, CLEAR_LISTINGS } from './actions';

const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWTICH_LOCATION:
      return {
        city: action.city,
        jobs: [...state.jobs, ...action.jobs]
      };
    case CLEAR_LISTINGS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
