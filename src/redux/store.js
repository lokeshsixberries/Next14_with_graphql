'use client';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import counterReducer from "./slice";

export const ReduxProvider = ({ children }) => {
    const store = configureStore({
        reducer: {
            counter:counterReducer
        }
    });
    return (
        <>
            <Provider store={store}>{children}</Provider>
        </>
    )
}