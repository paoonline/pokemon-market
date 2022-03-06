import { useContext } from "react"
import { CartContext } from "../../../store"
import { ButtonMinus, ButtonPlus, ButtonNumber } from "../../each/Button"

export const CartList = () => {
    const { CartListDetail } = useContext(CartContext)
    return (
        <div className='overflow-scroll relative  px-4 sm:px-6  h-60% sm:h-70%'>
            {CartListDetail.length > 0 && CartListDetail.map((res, i) =>
                <div key={res + "_" + i}>
                    <div className="flex flex-row mb-5">
                        <div className="flex-none relative pr-4 ">
                            <div className='w-11 h-60px'>
                                <img
                                    src={res.imageUrl}
                                    alt={'test'}
                                    className="w-11 h-60px object-center object-cover"
                                />
                            </div>
                        </div>
                        <div className="grow h-14 text-white text-xs">
                            <div className="break-all">{res.itemName}</div>
                            <div className="break-all text-gray-card mt-1">{res.priceItem}</div>
                        </div>
                        <div className="flex-none w-14 h-14 text-white text-xs break-all">
                            {res.priceAll.toFixed()}
                        </div>
                    </div>
                    <div className="flex flex-row  mb-5">
                        <div className="flex-none relative">
                            <ButtonMinus detail={res} />
                        </div>
                        <div className="grow h-14 text-white text-xs pl-2 pr-2">
                            <ButtonNumber amount={res.qty} />
                        </div>
                        <div className="flex-none w-14 h-14 text-white text-xs">
                            <ButtonPlus detail={res} />
                        </div>
                    </div>
                </div>)
            }

        </div >
    )
}