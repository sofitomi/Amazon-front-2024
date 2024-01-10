import React,{createContext, useContext, useReducer} from "react";

// prepare the data layer
export const StateContext = createContext();

// wrap our app andprovide the data layer

export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// push andpull information from the data layer

export const useStateValue = () => useContext(StateContext);
