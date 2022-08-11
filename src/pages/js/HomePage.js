import React, { useState } from "react";
import CrossCard from "../../components/js/CrossCard";
import '../scss/HomePage.scss'

function HomePage() {

    const [show, setShow] = useState(false);
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
                            type="text"
                            name="search-text"
                            id="search-text"
                            autoComplete="family-name"
                            className="search-bar-input rounded-r-none border-r-0 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Hangi konuda danışmak istiyorsun?"
                        />
                        <button className="search-bar-button">
                            Ara
                        </button>
                    </div>

                </div>
            </div>

            <div className="card-list">
                <CrossCard  title="Kaliteli Hizmet Al" paragraph="Teklif aldığın hizmet verenlerin kalitesini daha önceki işlerinde aldıkları gerçek müşteri yorumları sayesinde görür, güvenle kararını verirsin." imgSrc="https://i.ibb.co/RT9z8hn/Section.png" direction="left" />
                <CrossCard  title="Kaliteli Hizmet Al" paragraph="Teklif aldığın hizmet verenlerin kalitesini daha önceki işlerinde aldıkları gerçek müşteri yorumları sayesinde görür, güvenle kararını verirsin." imgSrc="https://i.ibb.co/RT9z8hn/Section.png" direction="right" />
                <CrossCard  title="Kaliteli Hizmet Al" paragraph="Teklif aldığın hizmet verenlerin kalitesini daha önceki işlerinde aldıkları gerçek müşteri yorumları sayesinde görür, güvenle kararını verirsin." imgSrc="https://i.ibb.co/RT9z8hn/Section.png" direction="left" />
                <CrossCard  title="Kaliteli Hizmet Al" paragraph="Teklif aldığın hizmet verenlerin kalitesini daha önceki işlerinde aldıkları gerçek müşteri yorumları sayesinde görür, güvenle kararını verirsin." imgSrc="https://i.ibb.co/RT9z8hn/Section.png" direction="right" />
            </div>
        </div>

    );
}

export default HomePage;