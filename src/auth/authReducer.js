import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
        admin: false,
      };
    case types.logout:
      return {
        logged: false,
      };
    case types.admin:
      return {
        ...action.payload,
        logged: true,
        admin: true,
      };

    default:
      return state;
  }
};
