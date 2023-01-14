import React, { useState } from "react";
import { storage } from '../../../firebase'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function AccountInfo(/*props: props*/) {

    const [inputs, setInputs] = useState(null)
    const [imageUpload, setImageUpload] = useState(null)

    const uploadImage = () => {
        if (imageUpload == null) return
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                inputs.image = url
            });
        });
    }

    function handleSaveChanges() {
        
        uploadImage()
    }


    return (

        <div className="account-info">
            <h3 className="form-title">Hesap Bilgileri</h3>
            <div className="md:grid md:grid-cols-3 md:gap-0 account-all-content">
                <div className="mt-5 md:mt-0 md:col-span-2">

                    <div className="sm:overflow-hidden">
                        <div className="bg-white pb-3 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Profil Fotoğrafı</label>
                                <div className="mt-1 flex items-center">
                                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="file"
                                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary "
                                        onChange={(event) => {
                                            setImageUpload(event.target.files[0]);
                                        }}>
                                    </input>
                                </div>
                            </div>

                        </div>
                        <div className="py-5 pb-3 bg-white">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        İsim
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Soy İsim
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-5 pb-3 bg-white space-y-6">
                            <fieldset>
                                <legend className="sr-only">By Email</legend>
                                <div className="text-base font-medium text-gray-900" aria-hidden="true">
                                    By Email
                                </div>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="comments"
                                                name="comments"
                                                type="checkbox"
                                                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="comments" className="font-medium text-gray-700">
                                                Comments
                                            </label>
                                            <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="candidates"
                                                name="candidates"
                                                type="checkbox"
                                                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="candidates" className="font-medium text-gray-700">
                                                Candidates
                                            </label>
                                            <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="offers"
                                                name="offers"
                                                type="checkbox"
                                                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="offers" className="font-medium text-gray-700">
                                                Offers
                                            </label>
                                            <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                                <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-center">
                                        <input
                                            id="push-everything"
                                            name="push-notifications"
                                            type="radio"
                                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                        />
                                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                            Everything
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="push-email"
                                            name="push-notifications"
                                            type="radio"
                                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                        />
                                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                            Same as email
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="push-nothing"
                                            name="push-notifications"
                                            type="radio"
                                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                        />
                                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                            No push notifications
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="py-3 pb-3 bg-gray-50 text-right">
                            <button
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                onClick={handleSaveChanges}
                            >
                                Kaydet
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AccountInfo;