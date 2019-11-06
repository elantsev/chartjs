import {
  GET_GRAPH_DATA_ERROR,
  GET_GRAPH_DATA_SUCCESS,
  GET_GRAPH_DATA_IS_LOADING
} from "../actions/getGraphData";

const initialState = {
  year: null,
  month: null,
  day: null,
  isLoading: true
};

export const graphData = (state = initialState, action) => {
  switch (action.type) {
    case GET_GRAPH_DATA_IS_LOADING:
      return { ...state, isLoading: true };

    case GET_GRAPH_DATA_SUCCESS:
      return { ...state, isLoading: false, ...action.payload };

    case GET_GRAPH_DATA_ERROR:
      return { ...state, errorData: action.payload, isLoading: false };

    default:
      return state;
  }
};
