import React from 'react';
import loadingSVG from "../../assets/loading.svg";

const Preloader = (props)=>{
    return (<img src={loadingSVG} alt="Please, wait for download..."/>);
}

export default Preloader;