import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../Config";

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }
    return (
        <div onClick={() => handleLogin("popup")}>Login/Register</div>
    );
}