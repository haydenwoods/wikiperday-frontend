const AUTH_STORAGE_KEY = "auth";

export const getAuth = (): string | null => localStorage.getItem(AUTH_STORAGE_KEY);
export const setAuth = (auth: string) => localStorage.setItem(AUTH_STORAGE_KEY, auth);
export const clrAuth = () => localStorage.removeItem(AUTH_STORAGE_KEY);