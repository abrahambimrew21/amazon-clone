import React,{createContext,useContext,useReducer} from "react";
import reducer from "./Reducer";

export const StateContext = createContext();

export const StateProvider = ({reduce,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);