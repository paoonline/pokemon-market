import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useEffect, useState } from "react";
import { createContext } from "react";

interface InitProps {
    loading: boolean;
}

interface childrenProps {
    children: object
}

interface cardMarketProps {
    data: Map<string, cardMarketDetail>
}

interface cardMarketDetail {
    prices: Map<string, object>,
    updatedAt: string,
    url: string
}


export const InitContext = createContext({} as InitProps);
export const InitProvider = (props: childrenProps) => {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        PokemonTCG.findCardByID('')
            .then(card => {
                console.log(card)
                setLoading(false)
            })
    }, [loading])


    const store = {
        loading: loading,
    };
    return (
        <InitContext.Provider value={store}>
            {props.children}
        </InitContext.Provider>
    );
};


