import { planetConstants } from '../actions/planetListActions';

const INITIAL_STATE = {
  planets: []
};

const planetListReducer = (state = INITIAL_STATE, action) => {
  const {
    FETCH_PLANETS,
    FETCH_PLANETS_SUCCESS,
    FETCH_PLANETS_FAILURE
  } = planetConstants;

  switch (action.type) {
    case FETCH_PLANETS:
      return Object.assign({}, state, {
        isFetching: true,
        fetched: false,
        didInvalidate: false
      });
    case FETCH_PLANETS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        fetched: true,
        didInvalidate: false,
        pipelines: action.payload
      });
    case FETCH_PLANETS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        fetched: false,
        didInvalidate: true
      });
    default:
      return state;
  }
};

export default planetListReducer;