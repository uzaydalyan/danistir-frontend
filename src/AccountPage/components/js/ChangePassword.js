import React from "react";

function ChangePassword(/*props: props*/) {

    return (
        <div>
            <h3 class="form-title">Şifrenizi Değiştirin</h3>
            <form action="#" method="POST">
                <div className="col-span-10 sm:col-span-3 w-64">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Şu Anki Şifre
                    </label>
                    <input
                        type="password"
                        name="current-password"
                        id="current-password"
                        autoComplete="given-password"
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Yeni Şifre
                    </label>
                    <input
                        type="password"
                        name="new-password"
                        id="new-password"
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Yeni Şifre (Tekrar)
                    </label>
                    <input
                        type="password"
                        name="new-password2"
                        id="new-password2"
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>

                <div className="py-5 bg-gray-50 text-right">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword