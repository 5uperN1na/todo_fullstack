import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {

    const [checking, setChecking] = React.useState<boolean>(true);
    const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

    React.useEffect(() => {
        //send token to server for verification
        const token = localStorage.getItem('token');
        fetch('/auth/token/verify', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.ok) {
                    //the token is ok
                    setLoggedIn(true);
                }

                //otherwise turn checking off and let
                //loggedIn determine next step
                setChecking(false);
            })
    }, [])

    if (checking) {
        return <h1>Loading!</h1>
    }

    if (loggedIn) {
        return <Route {...rest}>{children}</Route>
    } else {
        return <Redirect to="/login" />
    }
}

interface PrivateRouteProps {
    exact?: boolean;
    path: string;
}

export default PrivateRoute;