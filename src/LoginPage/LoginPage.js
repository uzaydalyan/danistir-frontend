import './LoginPage.scss'
import Login from './components/js/Login';
import Register from './components/js/Register';
import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

/*interface props{

  selected: string,
  handleClick: Function
}*/

function LoginPage(/*props: props*/) {

  const [bannerSide, setBannerSide] = useState('left');
  const isMounted = useRef(false);

  useEffect(() => {

    if (isMounted.current) {

      if (bannerSide === 'left') {

        $('.banner').css("margin-left", "0px");
        $('.banner-text').css("opacity", "0");
        $('.banner').css("border-top-right-radius", "0px");
        $('.banner').css("border-bottom-right-radius", "0px");
        $('.banner').css("border-top-left-radius", "8px");
        $('.banner').css("border-bottom-left-radius", "8px");
        $('.banner').css("background-image", 'url("https://i.ibb.co/kxtQQ0R/login-banner.png")');
        $('.banner-text').css("margin-left", "30px");

        const text_back = setTimeout(() => {

          
          $('.banner-text').css("text-align", "left");
          $('.banner-text').css("width", "223px");
          $('.banner-text').html("Bir an önce danışmanınızla görüşmek için giriş yapın!");
          $('.banner-text').css("opacity", "1");
        }, 1000);
      }
      else {
        $('.banner').css("margin-left", "568px");
        $('.banner-text').css("opacity", "0");
        $('.banner').css("border-top-left-radius", "0px");
        $('.banner').css("border-bottom-left-radius", "0px");
        $('.banner').css("border-top-right-radius", "8px");
        $('.banner').css("border-bottom-right-radius", "8px");
        $('.banner').css("background-image", 'url("https://i.ibb.co/RT9z8hn/Section.png")');
        $('.banner-text').css("margin-left", "178px");

        const text_back = setTimeout(() => {

          
          $('.banner-text').css("width", "360px");
          $('.banner-text').css("text-align", "right");
          $('.banner-text').html("Binlerce danışmanlık hizmetine hızlı ve kolayca ulaşmak için kaydolun!");
          $('.banner-text').css("opacity", "1");
        }, 1000);
      }
    }

    else{

      isMounted.current = true;
    }
  })

  const handleBanner = ((side) => {

    setBannerSide(side);
  })

  return (

    <div className="login-page">

      <Register handleBanner={handleBanner} />
      <Login handleBanner={handleBanner} />
      <div className="banner"><div className="banner-text">Bir an önce danışmanınızla görüşmek için giriş yapın! </div></div>
    </div>
  );
}

export default LoginPage;