
import { ShoppingBagIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { MinusIcon } from '@heroicons/react/solid'

interface ButtonAble {
    callback?: (data: object) => object
}
export const ButtonCart = (props: ButtonAble): JSX.Element => {
    return (
        <button className="inline-flex  text-white items-center justify-center p-2 orange rounded-md shadow-lg bg-button-orange">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </button>
    )
}

export const ButttonAddToCard = (): JSX.Element => {
    return (
        <button
            type="submit"
            className="text-xs h-38 w-144 bg-gray-not-active border border-transparent rounded-md pr-2 flex items-center justify-center font-medium text-white hover:bg-gray-active"
        >
            <ShoppingBagIcon className='h-5 w-5 pr-1 mr-1' />
            Add to bag
        </button>
    )
}

export const ButttonPlus = (): JSX.Element => {
    return (
        <button
            type="submit"
            className="text-xs h-54 w-54 bg-gray-not-active border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-gray-active"
        >
            <PlusIcon className='h-4 w-4' />
        </button>
    )
}


export const ButttonMinus = (): JSX.Element => {
    return (
        <button
            type="submit"
            className="text-xs h-54 w-54 bg-gray-not-active border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-gray-active"
        >
            <MinusIcon className='h-4 w-4' />
        </button>
    )
}

