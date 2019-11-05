import {
  GET_GRAPH_DATA_ERROR,
  GET_GRAPH_DATA_SUCCESS,
  GET_GRAPH_DATA_IS_LOADING
} from "../actions/getGraphData";

const initialState = {
  year: null,
  month: null,
  day: null,
  isLoading: false
};

let data = {
  day: [40, 19, 8],
  month: [402, 180, 180],
  year: [5000, 615, 1500]
};

export const graphData = (state = initialState, action) => {
  switch (action.type) {
    case GET_GRAPH_DATA_IS_LOADING:
      return { ...state, isLoading: true };

    case GET_GRAPH_DATA_SUCCESS:
      return { ...state, isLoading: false, ...data };

    case GET_GRAPH_DATA_ERROR:
      return { ...state, customNews: action.payload, isLoading: false };

    default:
      return state;
  }
};
