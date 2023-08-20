import React, { useState } from "react";
import propTypes from './AppContext';
import AppContext from "./AppContext";




function Provider({ children }) {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    const value = {produtos, setProdutos, loading, setLoading}

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.displayName,
}.isRequired;