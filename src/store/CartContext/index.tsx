import { useState, createContext, useContext, useEffect } from "react";

interface CartAble extends totalSetAble {
    CartListDetail: Array<CartListProps>
    addToCart: (data: any, type: string) => void,
    handleCart: (data: any, type: string) => void,
    setCartList: (data: any) => void,
    setTotalSetAble: (data: any) => void
    removeCart: () => void

}
interface childrenProps {
    children: object
}

interface totalSetAble {
    totalCardAmount: number
    totalPrice: number,
}

interface CartListProps {
    id: any;
    itemName: string,
    priceItem: number,
    priceAll: number,
    imageUrl: string,
    qty: number
}

export const CartContext = createContext({} as CartAble);
export const CartProvider = (props: childrenProps) => {
    const [CartListDetail, setCartList] = useState<Array<CartListProps>>([])
    const [totalSetAble, setTotalSetAble] = useState({
        totalCardAmount: 0,
        totalPrice: 0
    })

    const addToCart = async (data: any, type: string) => {
        const findId = CartListDetail.findIndex(res => res.id === data.id)

        if (findId < 0) {
            let newArray = []
            setTotalSetAble({
                totalCardAmount: totalSetAble.totalCardAmount + 1,
                totalPrice: data.cardmarket.prices.averageSellPrice + totalSetAble.totalPrice
            })
            newArray.push(...CartListDetail, {
                id: data.id,
                itemName: data.name,
                priceItem: data.cardmarket.prices.averageSellPrice,
                priceAll: data.cardmarket.prices.averageSellPrice,
                imageUrl: data.images.small,
                qty: 1
            })

            setCartList(newArray)
        } else {
            setTotalSetAble({
                totalCardAmount: totalSetAble.totalCardAmount + 1,
                totalPrice: data.cardmarket.prices.averageSellPrice + totalSetAble.totalPrice
            })
            CartListDetail[findId].id = data.id
            CartListDetail[findId].itemName = data.name
            CartListDetail[findId].priceItem = data.cardmarket.prices.averageSellPrice
            CartListDetail[findId].priceAll = data.cardmarket.prices.averageSellPrice * (CartListDetail[findId].qty + 1)
            CartListDetail[findId].imageUrl = data.images.small
            CartListDetail[findId].qty = CartListDetail[findId].qty + 1
            setCartList(CartListDetail)
        }
    }

    const removeCart = () => {
        setCartList([])
        setTotalSetAble({
            totalCardAmount: 0,
            totalPrice: 0
        })
    }

    const handleCart = (id: string, type: string) => {
        const findId = CartListDetail.findIndex(res => res.id === id)
        const findIdElement = CartListDetail[findId]
        if (type === 'minus') {
            if (findIdElement.qty === 1) {
                const filterRemoveItemOne = CartListDetail.filter(res => res.id !== findIdElement.id)
                setCartList(filterRemoveItemOne)
                setTotalSetAble({
                    totalCardAmount: totalSetAble.totalCardAmount - 1 > 0 ? totalSetAble.totalCardAmount - 1 : 0,
                    totalPrice: totalSetAble.totalPrice - findIdElement.priceItem > 0 ? totalSetAble.totalPrice - findIdElement.priceItem : 0
                })
            } else {
                CartListDetail[findId].priceAll = CartListDetail[findId].priceAll - findIdElement.priceItem
                CartListDetail[findId].qty = CartListDetail[findId].qty - 1
                setCartList(CartListDetail)
                setTotalSetAble({
                    totalCardAmount: totalSetAble.totalCardAmount - 1 > 0 ? totalSetAble.totalCardAmount - 1 : 0,
                    totalPrice: totalSetAble.totalPrice - findIdElement.priceItem > 0 ? totalSetAble.totalPrice - findIdElement.priceItem : 0
                })
            }
        } else {
            CartListDetail[findId].priceAll = CartListDetail[findId].priceAll + findIdElement.priceItem
            CartListDetail[findId].qty = CartListDetail[findId].qty + 1
            setCartList(CartListDetail)
            setTotalSetAble({
                totalCardAmount: totalSetAble.totalCardAmount + 1,
                totalPrice: totalSetAble.totalPrice + findIdElement.priceItem
            })
        }
    }

    const store = {
        id: 0,
        CartListDetail: CartListDetail,
        totalCardAmount: totalSetAble.totalCardAmount,
        totalPrice: totalSetAble.totalPrice,
        addToCart: (data: any, type: string) => addToCart(data, type),
        handleCart: (data: any, type: string) => handleCart(data, type),
        setCartList: (data: any) => setCartList(data),
        setTotalSetAble: (data: any) => setTotalSetAble(data),
        removeCart: () => removeCart()
    };
    return (
        <CartContext.Provider value={store}>
            {props.children}
        </CartContext.Provider>
    );
};


