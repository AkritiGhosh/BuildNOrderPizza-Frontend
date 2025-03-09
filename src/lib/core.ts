import { UserProfiles } from "./constants";

const models = {
  AUTH: import.meta.env.VITE_BACKEND + "/auth/",
  USER: import.meta.env.VITE_BACKEND + "/user/",
  OPTIONS: import.meta.env.VITE_BACKEND + "/options/",
  ORDER: import.meta.env.VITE_BACKEND + "/order/",
};

export const API = {
  OPTIONS: {
    // All options = /options/
    // By category = /options/:category
    GET_OPTIONS: models.OPTIONS + "", // /options/
  },
};

export const checkAuth = () => {
  return true;
};

export const getUser = () => {
  return {
    profile: UserProfiles?.CUSTOMER,
  };
};

export const fetchAPI = async (
  method: string,
  api: string,
  authRequired: boolean = true,
  body: object | null = null
): Promise<any> => {
  try {
    const response = await fetch(api, {
      method: method.toUpperCase(),
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : null,
    });

    return await response?.json();
  } catch (error) {
    console.error(error);
  }
};
