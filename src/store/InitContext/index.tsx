import { AxiosError } from "axios";
import { useEffect, useState, createContext } from "react";
import { instanceAxios } from '../../utils/'
export interface InitProps {
    loading: boolean;
    count: number,
    page: number,
    pageSize: number,
    totalCount: number,
    CardList: Array<any>;
    setPage: (pageNumber: string) => void,
}
interface childrenProps {
    children: object
}

export const InitContext = createContext({} as InitProps);
export const InitProvider = (props: childrenProps) => {
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState('1')
    const [CardList, setCardList] = useState<Array<any>>([]);

    const getInit = async () => {
        const getPokemonCard = new Promise(
            async (resolve, reject) => {
                try {
                    let data = await instanceAxios
                        .get(`/cards?page=${page}&pageSize=20`)
                        .then((response) => {
                            return response.data
                        })
                        .catch((error: AxiosError) => {
                            console.error('error: ', error);
                        })
                    setCardList([...data.data])
                    resolve(true)
                } catch (error) {
                    reject(error)
                }
            },
        )

        await Promise.all([
            getPokemonCard,
        ]).then(() => {
            setLoading(false)
        }).catch((e) => console.log('Error => ', e))

    }
    useEffect(() => {
        getInit()
    }, [page])

    const store: InitProps = {
        loading: loading,
        setPage: (pageNumber: string) => setPage(pageNumber),
        CardList: CardList,
        count: 0,
        page: 0,
        pageSize: 0,
        totalCount: 0
    };
    return (
        <InitContext.Provider value={store}>
            {props.children}
        </InitContext.Provider>
    );
};


