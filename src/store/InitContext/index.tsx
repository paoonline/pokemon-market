import { AxiosError } from "axios";
import { useEffect, useState, createContext } from "react";
import { instanceAxios } from '../../utils/'
interface InitProps extends CardProps {
    loading: boolean;
    CardList: Array<any>;
    Rarity: Array<string>;
    Type: Array<string>
    setPaginationPage: (pageNumber: number) => void,
    setCardList: (CardList: Array<any>) => void,
    dropdownText: {
        RarityDropdown: string,
        TypeDropdown: string,
        setRarityDropdown: (rarity: string) => void,
        setTypeDropdown: (type: string) => void,
    },
    paginationPage: number,
    refreshList: (page: number) => void,
}
interface childrenProps {
    children: object
}
interface CardProps {
    count: number,
    page: number,
    pageSize: number,
    totalCount: number,
}

export const InitContext = createContext({} as InitProps);
export const InitProvider = (props: childrenProps) => {
    const [loading, setLoading] = useState(true)
    const [paginationPage, setPaginationPage] = useState(1)
    const [CardList, setCardList] = useState<Array<any>>([]);
    const [RarityType, setRarityType] = useState<Array<string>>([]);
    const [Type, setType] = useState<Array<string>>([]);
    const [pageOverview, setPageOverview] = useState<CardProps>({
        count: 0,
        page: 0,
        pageSize: 0,
        totalCount: 0,
    })
    const [RarityDropdown, setRarityDropdown] = useState('Rarity')
    const [TypeDropdown, setTypeDropdown] = useState('Type')
    const [refresh, setRefresh] = useState(false)

    const refreshList = async (page: number) => {
        await setRefresh(true)
        await setLoading(true)
        const data = await instanceAxios
            .get(`/cards?page=${page}&pageSize=20`)
            .then((response) => {
                return response.data
            })
            .catch((error: AxiosError) => {
                console.error('error: ', error);
            })
        setCardList([...data.data])
        setLoading(false)
        setRefresh(false)
    }

    const getInit = async () => {
        const getPokemonCard = new Promise(
            async (resolve, reject) => {
                try {
                    const data = await instanceAxios
                        .get(`/cards?page=${paginationPage}&pageSize=20`)
                        .then((response) => {
                            return response.data
                        })
                        .catch((error: AxiosError) => {
                            console.error('error: ', error);
                        })

                    setPageOverview({
                        count: data.count,
                        page: data.page,
                        pageSize: data.pageSize,
                        totalCount: data.totalCount,
                    })
                    setCardList([...data.data])
                    resolve(data)
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
                    setRarityType(['Rarity', ...data.data])

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
                    setType(['Type', ...data.data])
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
        if (loading && !refresh) {
            getInit()
        }
    }, [loading])

    const store: InitProps = {
        loading: loading,
        setPaginationPage: (pageNumber: number) => setPaginationPage(pageNumber),
        setCardList: (CardList: Array<any>) => setCardList(CardList),
        CardList: CardList,
        count: pageOverview.count,
        page: pageOverview.page,
        pageSize: pageOverview.pageSize,
        totalCount: pageOverview.totalCount,
        Rarity: RarityType,
        Type: Type,
        dropdownText: {
            RarityDropdown: RarityDropdown,
            TypeDropdown: TypeDropdown,
            setRarityDropdown: (rarity: string) => setRarityDropdown(rarity),
            setTypeDropdown: (type: string) => setTypeDropdown(type),
        },
        paginationPage: paginationPage,
        refreshList: (page: number) => refreshList(page)
    };
    return (
        <InitContext.Provider value={store}>
            {props.children}
        </InitContext.Provider>
    );
};


