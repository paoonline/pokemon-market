import { ButtonMinus } from "../../each/Button"
import { ButtonPlus } from "../../each/Button"
import { ButtonNumber } from "../../each/Button"

export const CartList = () => {
    return (
        <div className='overflow-scroll relative  px-4 sm:px-6  h-60% sm:h-70%'>
            <div className="flex flex-row mb-5">
                <div className="flex-none relative pr-4 ">
                    <div className='w-11 h-60px'>
                        <img
                            src={'https://images.pokemontcg.io/pl3/1.png'}
                            alt={'test'}
                            className="w-11 h-60px object-center object-cover"
                        />
                    </div>
                </div>
                <div className="grow h-14 text-white text-xs">
                    <div className="break-all">aadsadasdsssssssssssssssss</div>
                    <div className="break-all text-gray-card mt-1">$2.29</div>
                </div>
                <div className="flex-none w-14 h-14 text-white text-xs break-all">
                    $ 4.8
                </div>
            </div>
            <div className="flex flex-row  mb-5">
                <div className="flex-none relative">
                    <ButtonMinus />
                </div>
                <div className="grow h-14 text-white text-xs pl-2 pr-2">
                    <ButtonNumber />
                </div>
                <div className="flex-none w-14 h-14 text-white text-xs">
                    <ButtonPlus />
                </div>
            </div>
        </div >
    )
}