import { fetchGet, fetchCreate } from "./api";

class AuthService {
    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem("user_logged_in_token");
    }

    async isAuthenticated() {
        // return decode(this.getToken());
        const userToken = this.getToken();
        return await fetchGet(
            process.env.REACT_APP_BASE_URL +
                "/api/users/auth?userToken=" +
                userToken
        ).then((returnData) => {
            // console.log(returnData);
            if (returnData?.isAuthenticated) {
                return true;
            }
            return false;
        });
    }

    async login(loginInput) {
        return await fetchCreate(
            process.env.REACT_APP_BASE_URL + "/api/users/login/",
            loginInput
        ).then((returnData) => {
            if (returnData?.success) {
                // console.log(returnData);
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

    async logout(userId) {
        await fetchGet(
            process.env.REACT_APP_BASE_URL +
                "/api/users/logout?userId=" +
                userId
        ).then((returnData) => {
            console.log("logout in auth client side");
            console.log(returnData.isAuth);
            console.log("logout in auth client side");
            if (!returnData?.isAuth) {
                return false;
            }
            return "Something strange happened";
        });
        // Clear user token and profile data from localStorage
        localStorage.removeItem("user_logged_in_token");
    }

    // // check if user's logged in
    // loggedIn() {
    //     // Checks if there is a saved token and it's still valid
    //     const token = this.getToken();
    //     return !!token && !this.isTokenExpired(token);
    // }

    // // check if token is expired
    // isTokenExpired(token) {
    //     try {
    //         const decoded = decode(token);
    //         if (decoded.exp < Date.now() / 1000) {
    //             return true;
    //         } else return false;
    //     } catch (err) {
    //         return false;
    //     }
    // }
}

// create a new class to instantiate for a user
export default new AuthService();
