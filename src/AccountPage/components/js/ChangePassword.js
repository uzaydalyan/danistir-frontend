import React from "react";
import { useState } from "react";
import { setNewPassword } from "../../../services/services";
import { useCookies } from "react-cookie";
import { Input } from "@mui/material";

function ChangePassword(/*props: props*/) {

    const [values, setValues] = useState({ current: "", new: "", new2: "" , showPassword: false})
    const [cookies, setCookies] = useCookies("access-token")

    const handleChange = (prop) => (event) => {

        console.log(event)

        setValues({ ...values, [prop]: event.target.value })
    }

    const valid = () => {
        console.log(values)
        if (values.new != values.new2) {
            alert("Your passwords doesn't match!")
            return false;
        } if (values.current == "" || values.new == "" || values.new2 == "") {
            alert("Fill everything!")
            return false;
        }

        return true
    }

    const handleSubmit = () => {

        if (valid()) {

            setNewPassword(values, cookies.danistir_access_token).then((response) => {

                if (response.status == 200) {
                    alert("Your password has been changed successfully!")
                } else if (response.status == 404) {
                    alert("Your current password is wrong!")
                } else {
                    alert("Your password change has failed!")
                }
            })
        }


    }

    return (
        <div>
            <h3 class="form-title">Şifrenizi Değiştirin</h3>
            <div className="account-all-content">
                <div className="col-span-10 sm:col-span-3 w-64">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Şu Anki Şifre
                    </label>
                    <Input
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.current}
                        variant=""
                        name="current-password"
                        id="current-password"
                        onChange={handleChange("current")}
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Yeni Şifre
                    </label>
                    <Input
                        type="password"
                        name="new-password"
                        id="new-password"
                        value={values.new}
                        onChange={handleChange("new")}
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Yeni Şifre (Tekrar)
                    </label>
                    <Input
                        type="password"
                        name="new-password2"
                        id="new-password2"
                        value={values.new2}
                        onChange={handleChange("new2")}
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>

                <div className="py-5 bg-gray-50 text-right">
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword