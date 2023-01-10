import {
  START_LOADING_ROUTE,
  SUCCESS_NEW_ROUTE,
  ERROR_LOADING_ROUTE,
} from "../constants/routeConstants";

type Point = { lat: null | number; lng: null | number };
export type State = {
  loading: boolean;
  error: boolean | string;
  route: any | Point[] | [];
};
const routeReducer = (
  state: State = {
    loading: false,
    error: false,
    route: [],
  },
  action: { type: string; payload?: { route?: Point[]; error?: string } }
) => {
  switch (action.type) {
    case START_LOADING_ROUTE:
      return {
        loading: true,
        error: false,
        route: [],
      };
    case SUCCESS_NEW_ROUTE:
      return {
        loading: false,
        error: false,
        route: action?.payload?.route || [],
      };
    case ERROR_LOADING_ROUTE:
      return {
        loading: false,
        error: action?.payload?.error || "ошибка",
        route: [],
      };
    default:
      return state;
  }
};

export default routeReducer;
