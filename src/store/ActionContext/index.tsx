import { useState, createContext, useContext, useEffect } from "react";
import { InitContext } from '../InitContext'
interface ActionProps {
    handleTextSearch: (textSearch: string) => void,
    tempList: Array<any>;
}

interface childrenProps {
    children: object
}

export const ActionContext = createContext({} as ActionProps);
export const ActionProvider = (props: childrenProps) => {
    const [tempList, setTempList] = useState<Array<any>>([]);
    const [stampSearch, setStampSearch] = useState(false)
    const initContext = useContext(InitContext)
    const { setCardList, CardList } = initContext

    const handleTempList = async () => {
        await setTempList(CardList)
    }

    useEffect(() => {
        handleTempList()
    }, [stampSearch])

    const handleTextSearch = async (textSearch: string) => {
        setStampSearch(true)
        if (textSearch.length > 4) {
            let filterTempList = await tempList.filter(res => res.name.toLowerCase().includes(textSearch.toLowerCase()))
            if (filterTempList.length > 0) {
                setCardList(filterTempList)
            }
        }
        if (textSearch.length === 0) {
            setCardList(tempList)
        }
    }
    const store = {
        handleTextSearch,
        tempList
    };
    return (
        <ActionContext.Provider value={store}>
            {props.children}
        </ActionContext.Provider>
    );
};


