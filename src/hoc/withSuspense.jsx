import React from 'react';
import Preloader from "../components/Common/Preloader/Preloader";

const WithSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader/>}><Component {...props}/></React.Suspense>;
    }
}

export default WithSuspense;