import { useState, createContext, useContext, useEffect } from "react";
import { InitContext } from '../InitContext'
interface ActionProps {
    handleTextSearch: (textSearch: string) => void,
    tempList: Array<any>;
    handleSubmitDropdown: (obj: any, type: string) => void,
}
interface childrenProps {
    children: object
}

export const ActionContext = createContext({} as ActionProps);
export const ActionProvider = (props: childrenProps) => {
    const [tempList, setTempList] = useState<Array<any>>([]);
    const [stampSearch, setStampSearch] = useState(false)
    const initContext = useContext(InitContext)
    const { setCardList, CardList, dropdownText } = initContext

    const handleTempList = async () => {
        setTempList(CardList)
        setStampSearch(true)
    }

    const handleSubmitDropdown = async (e: any, type: string) => {
        let filterTempList
        const targetValue = e.target.value
        if (type === 'Type') {
            await dropdownText.setTypeDropdown(targetValue)
            if (targetValue === 'Type') {
                setCardList(tempList)
            }
            filterTempList = await tempList.filter(res => res.types[0] === targetValue)
            if (filterTempList.length > 0) {
                setCardList(filterTempList)
            }

        } else {
            await dropdownText.setRarityDropdown(targetValue)
            if (targetValue === 'Rarity') {
                setCardList(tempList)
            }
            filterTempList = await tempList.filter(res => res.rarity === targetValue)
            if (filterTempList.length > 0) {
                setCardList(filterTempList)
            }
        }
    }

    useEffect(() => {
        if (!stampSearch && CardList.length > 0) {
            handleTempList()
        }

    }, [CardList])

    const handleTextSearch = async (textSearch: string) => {
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
        tempList,
        handleSubmitDropdown
    };
    return (
        <ActionContext.Provider value={store}>
            {props.children}
        </ActionContext.Provider>
    );
};


