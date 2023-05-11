import { baseServices } from "./baseServices";

class AuthServices extends baseServices {
    constructor() {
        super();
    }

    loginApi = (userLogin) => {
        return this.post('/auth/users', userLogin);
    }

    registerUserApi = (newUser) => {
        return this.post('/users', newUser);
    }
}

export const authServices = new AuthServices();