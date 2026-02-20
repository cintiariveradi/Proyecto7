const KEY = "token_5steps";

export const setToken = (token) => localStorage.setItem(KEY, token);
export const getToken = () => localStorage.getItem(KEY);
export const clearToken = () => localStorage.removeItem(KEY);