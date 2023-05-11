import Axios from "axios";
import { DOMAIN, TOKEN, getAccessTokenCookie, getAccessTokenStorage } from "../utils/settings";
import { getCookie } from "../utils/cookies";

export class baseServices {
    post = (url, data) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'POST',
            data,
            headers: { "Authorization": "Bearer " + (getAccessTokenStorage() ?? getAccessTokenCookie()) },
        })
    }
    put = (url, data) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'PUT',
            data,
            headers: { "Authorization": "Bearer " + (getAccessTokenStorage() ?? getAccessTokenCookie()) },
        })
    }
    get = (url) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'GET',
            headers: { "Authorization": "Bearer " + (getAccessTokenStorage() ?? getAccessTokenCookie()) },
        })
    }
    getDetail = (url) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'GET',
            headers: { "Authorization": "Bearer " + (getAccessTokenStorage() ?? getAccessTokenCookie()) },
        })
    }
    delete = (url) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'DELETE',
            headers: { "Authorization": "Bearer " + (getAccessTokenStorage() ?? getAccessTokenCookie()) },
        })
    }
}