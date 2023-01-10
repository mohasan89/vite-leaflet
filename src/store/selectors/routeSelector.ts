import type { State } from "../reducers/routeReducer";

export const loadingSelector = ({ route }: State) => route.loading;
export const errorSelector = ({ route }: State) => route.error;
export const routeSelector = ({ route }: State) => route.route;
