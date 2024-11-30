import axios from "axios";
import { FIXED_HEADERS } from "../config/headers";


export const initHttp = (configHttp = { excludeToken: false }) => {
    const instance = axios.create();
    instance.interceptors.request.use(
        (config) => setHeaders(config, configHttp),
        (error) => Promise.reject(error)
    );

    const setHeaders = async (config, configHttp) => {
        if (!configHttp.excludeToken) {
            config.headers = {
                ...FIXED_HEADERS,
            };
        }
        return config;
    };

    return instance;
};

export const HttpClient = (config) => {
    const http = initHttp(config);

    const get = (url) => {
        return http.get(url);
    };

    const post = (url, payload) => {
        return http.post(url, payload);
    };

    const put = (url, payload) => {
        return http.put(url, payload);
    };

    const patch = (url, payload) => {
        return http.patch(url, payload);
    };

    const remove = (url) => {
        return http.delete(url);
    };

    return {
        get,
        post,
        put,
        patch,
        remove,
    };
};
