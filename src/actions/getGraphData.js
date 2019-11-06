export const GET_GRAPH_DATA_IS_LOADING = "GET_GRAPH_DATA_IS_LOADING";
export const GET_GRAPH_DATA_SUCCESS = "GET_GRAPH_DATA_SUCCESS";
export const GET_GRAPH_DATA_ERROR = "GET_GRAPH_DATA_ERROR";

const data = {
  day: [40, 19, 8],
  month: [402, 180, 180],
  year: [5000, 615, 1500]
};

export function getGraphData() {
  return function(dispatch) {
    dispatch({ type: GET_GRAPH_DATA_IS_LOADING });
    try {
      setTimeout(
        () => dispatch({ type: GET_GRAPH_DATA_SUCCESS, payload: data }),
        4000
      );
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_GRAPH_DATA_ERROR, payload: error });
    }
  };
}
