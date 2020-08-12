import React from 'react';
import { Route } from 'react-router-dom';
import Signin from '../pages/Signin';
import { useSessionContext } from '../utils/GlobalState';


const PrivateRoute = ({ component, ...rest }) => {
    const [state, dispatch] = useSessionContext();

    if (state.auth) {
        return <Route {...rest} component={component} />
    } else {
        return <Route {...rest} component={Signin} />
    }
    
};

export default PrivateRoute;