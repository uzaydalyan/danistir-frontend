import React, { useState } from "react";
import CrossCard from "./components/js/CrossCard";
import { getSearchResults } from "../services/services";
import {Link, useNavigate} from 'react-router-dom';
import './HomePage.scss'

function HomePage() {

    const [searchWord, setSearchWord] = useState("");
    const navigate = useNavigate();

    const handleSearchInputChange = (event) => {

        setSearchWord(event.target.value)
    }


    const handleSearchClick = () => {

        navigate('/search_results/' + searchWord)

        /*getSearchResults(searchWord).then((response) => {


        })*/
    }

    return (
        <div className="home">
            <div className="home-banner">

                <div className="banner-content">
                    <div className="banner-big-title">
                        Danış Danıştır, Hayatını Kolaylaştır
                    </div>

                    <div className="banner-small-title">
                        evini terketmeden gibi bişey
                    </div>

                    <div className="search-bar">
                        <input
                            onChange={handleSearchInputChange}
                            type="text"
                            name="search-text"
                            id="search-text"
                            className="search-bar-input rounded-r-none border-r-0 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Hangi konuda danışmak istiyorsun?"
                        />
                        <button className="search-bar-button" onClick={handleSearchClick}>
                            Ara
                        </button>
                    </div>

                </div>
            </div>

            <div className="card-list">
                <CrossCard  title="Kendini Kanıtlamış Danışmanlar" paragraph="Alanında uzmanlığını belgelerle tarafımıza kanıtlamış, deneyimli işini bilen danışmanlar" imgSrc="https://firebasestorage.googleapis.com/v0/b/danistir-ed375.appspot.com/o/card1.png?alt=media&token=39741e61-18ec-4a49-ad14-6cefea7e7131" direction="left" />
                <CrossCard  title="1:1 Görüşmeler" paragraph="Aracı olmadan yapılan bire bir özel görüşmeler" imgSrc="https://firebasestorage.googleapis.com/v0/b/danistir-ed375.appspot.com/o/card3.png?alt=media&token=8fa4bb1b-3404-434b-922c-4ba3713125a1" direction="right" />
                <CrossCard  title="Anında Çözüm" paragraph="Çok kısa sürede, randevu almadan yapılabilen acil çözüm desteği" imgSrc="https://firebasestorage.googleapis.com/v0/b/danistir-ed375.appspot.com/o/card2.png?alt=media&token=26dde6b0-0a6c-45d1-a6b1-7205f9438597" direction="left" />
                <CrossCard  title="Memnuniyet Garantisi" paragraph="Memnun kalmazsanız anında para iadesi" imgSrc="https://firebasestorage.googleapis.com/v0/b/danistir-ed375.appspot.com/o/card4.png?alt=media&token=d397cecd-05c0-46c6-b774-03e10c3633b8" direction="right" />
            </div>
        </div>

    );
}

export default HomePage;