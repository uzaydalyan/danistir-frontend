import './Account.scss'
import Sidebar from '../CommonComponents/js/Sidebar';
import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

function Account(/*props: props*/) {

 

  return (

    <div className="account">
        <div className="account-sidebar">

        <Sidebar />

        </div>

    </div>
  );
}

export default Account;