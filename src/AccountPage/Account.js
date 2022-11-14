import './Account.scss'
import Sidebar from './components/js/Sidebar';
import { useState, useEffect, useRef } from 'react';
import * as React from 'react';


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