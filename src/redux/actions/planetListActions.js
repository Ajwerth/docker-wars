import { RSAA } from 'redux-api-middleware';


//Planet Constants
export const planetConstants = {
  FETCH_PLANETS: 'FETCH_PLANETS',
  FETCH_PLANETS_SUCCESS: 'FETCH_PLANETS_SUCCESS',
  FETCH_PLANETS_FAILURE: 'FETCH_PLANETS_FAILURE'
};

let API_HOST = 'https://swapi.co/api/'

//Fetch Planets with redux-api-middleware
export const fetchPlanet = () => ({
  //The parameters of the API call are specified by root properties of the [RSAA] property of an RSAA.
  [RSAA]: {
    endpoint: `${API_HOST}/planets`,
    method: 'GET',
    types: [
      'FETCH_PLANETS',
      {
        type: 'FETCH_PLANETS_SUCCESS',
        payload: (action, state, res) => {
          return res.json();
        }
      },
      'FETCH_PLANETS_FAILURE'
    ]
  }
});
