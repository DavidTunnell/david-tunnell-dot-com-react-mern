import { fetchGet, fetchCreate } from "./api";

class AuthService {
    // Retrieves the user token from localStorage
    getToken() {
        return localStorage.getItem("user_logged_in_token");
    }

    //check if the user is authenticated
    async isAuthenticated() {
        const userToken = this.getToken();
        if (!userToken) {
            console.log("no user token");
            return false;
        }
        return await fetchGet(
            process.env.REACT_APP_BASE_URL +
                "/api/users/auth?userToken=" +
                userToken
        ).then((returnData) => {
            if (returnData?.isAuthenticated) {
                return true;
            }
            return false;
        });
    }

    //log user in
    async login(loginInput) {
        return await fetchCreate(
            process.env.REACT_APP_BASE_URL + "/api/users/login/",
            loginInput
        ).then((returnData) => {
            if (returnData?.success) {
                // Saves user token to localStorage
                localStorage.setItem(
                    "user_logged_in_token",
                    returnData.userData.token
                );
                return returnData;
            } else {
                return false;
            }
        });
    }

    //log user out by id
    async logout(userId) {
        // Clear user token and profile data from localStorage
        localStorage.removeItem("user_logged_in_token");
        //TODO: if no userId get token and remove from user record instead
        return await fetchGet(
            process.env.REACT_APP_BASE_URL +
                "/api/users/logout?userId=" +
                userId
        ).then((returnData) => {
            if (returnData?.success) {
                return true;
            }
            return false;
        });
    }
}

// create a new class to instantiate for a user
export default new AuthService();
