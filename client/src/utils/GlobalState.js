import React, { createContext, useReducer, useContext } from 'react';
import { SET_USER, SET_SESSION } from './actions';

const SessionContext = createContext();
const { Provider } = SessionContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                id: action.post.id,
                name: action.post.name,
                type: action.post.type,
                auth: action.post.auth
            };
        case SET_SESSION:
            return {
                ...state,
                sessionItems: action.post.sessionItems
            };
        default:
            return state;
    }
};

const SessionProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        id: '',
        name: '',
        type: '',
        sessionItems: [],
        auth: false
    });
    // console.log("==============state================");
    // console.log(state);

    return <Provider value={[state, dispatch]} {...props} />;
};

const useSessionContext = () => {
    return useContext(SessionContext);
};

export { SessionProvider, useSessionContext };