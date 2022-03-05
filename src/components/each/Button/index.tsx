
import { ShoppingBagIcon, XIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { MinusIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import { SlideContext } from '../../../store'
import language from '../../../utils/language'


export const ButtonCart = (props: any): JSX.Element => {
    const { setOpen } = useContext(SlideContext)
    return (
        <button onClick={() => { setOpen(true) }} className="h-12 w-12 inline-flex  text-white items-center justify-center p-2 orange rounded-md shadow-lg bg-button-orange" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </button >
    )
}

export const ButtonClosed = (props: any): JSX.Element => {
    const { setOpen } = useContext(SlideContext)
    return (
        <button onClick={() => { setOpen(false) }} className="h-12 w-12 inline-flex  text-white items-center justify-center p-2 orange rounded-md shadow-lg bg-button-orange" >
            <XIcon className="h-6 w-6" aria-hidden="true" />
        </button >
    )
}

export const ButtonAddToCard = (): JSX.Element => {
    return (
        <button
            type="submit"
            className="text-xs h-38 w-full bg-gray-not-active border border-transparent rounded-md pr-2 flex items-center justify-center font-medium text-white hover:bg-gray-active"
        >
            <ShoppingBagIcon className='h-5 w-5 pr-1 mr-1' />
            {language.add_bag}
        </button>
    )
}

export const ButtonPlus = (): JSX.Element => {
    return (
        <button
            type="submit"
            className="text-xs h-54 w-54 bg-gray-not-active border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-gray-active"
        >
            <PlusIcon className='h-4 w-4' />
        </button>
    )
}


export const ButtonMinus = (): JSX.Element => {
    return (
        <button
            type="submit"
            className="text-xs h-54 w-54 bg-gray-not-active border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-gray-active"
        >
            <MinusIcon className='h-4 w-4' />
        </button>
    )
}


export const ButtonNumber = (): JSX.Element => {
    return (
        <button
            type="submit"
            className="text-xs h-54 w-full bg-gray-not-active border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-gray-active"
        >
            1
        </button>
    )
}

export const ButtonContinueToPayment = (): JSX.Element => {
    return (
        <button
            type="submit"
            className="text-xs h-12 bg-button-orange w-full  border border-transparent rounded-md pr-2 flex items-center justify-center font-medium text-white"
        >
            <ShoppingBagIcon className='h-5 w-5 pr-1 mr-1' />
            {language.payment}
        </button>
    )
}


