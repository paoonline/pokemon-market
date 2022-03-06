import { AxiosError } from "axios";
import { useEffect, useState, createContext } from "react";
import { instanceAxios } from '../../utils/'
interface InitProps {
    loading: boolean;
    count: number,
    page: number,
    pageSize: number,
    totalCount: number,
    CardList: Array<any>;
    Rarity: Array<string>;
    Type: Array<string>
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
    const [RarityType, setRarityType] = useState<Array<string>>([]);
    const [Type, setType] = useState<Array<string>>([]);
    const getInit = async () => {
        const getPokemonCard = new Promise(
            async (resolve, reject) => {
                try {
                    const data = await instanceAxios
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

        const getRarityType = new Promise(
            async (resolve, reject) => {
                try {
                    const data = await instanceAxios
                        .get(`/rarities`)
                        .then((response) => {
                            return response.data
                        })
                        .catch((error: AxiosError) => {
                            console.error('error: ', error);
                        })
                    setType([...data.data])
                    resolve(true)
                } catch (error) {
                    reject(error)
                }
            },
        )

        const getType = new Promise(
            async (resolve, reject) => {
                try {
                    const data = await instanceAxios
                        .get(`/types`)
                        .then((response) => {
                            return response.data
                        })
                        .catch((error: AxiosError) => {
                            console.error('error: ', error);
                        })
                    setRarityType([...data.data])
                    resolve(true)
                } catch (error) {
                    reject(error)
                }
            },
        )

        await Promise.all([
            getPokemonCard,
            getRarityType,
            getType
        ]).then(() => {
            setLoading(false)
        }).catch((e) => console.log('Error => ', e))

    }
    useEffect(() => {
        if (loading) {
            getInit()
        }
    }, [loading])

    const store: InitProps = {
        loading: loading,
        setPage: (pageNumber: string) => setPage(pageNumber),
        CardList: CardList,
        count: 0,
        page: 0,
        pageSize: 0,
        totalCount: 0,
        Rarity: RarityType,
        Type: Type
    };
    return (
        <InitContext.Provider value={store}>
            {props.children}
        </InitContext.Provider>
    );
};


