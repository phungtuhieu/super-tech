
import AxiosClient from "./AxiosClient";

const _route = "/Auth";

const AuthenApi = {
    postLogin: (info) => {
        const url = `${_route}`;
        return AxiosClient.post(url, info);
    },
    getToken: (token) => {
        const url = `/TokenAuth/check_Token`;
        const headers = {
            "Authorization": `Bearer ${token}`,
           // 'My-Custom-Header': 'foobar'
        };
        return AxiosClient.get(url, { headers });
    },
}

export default AuthenApi