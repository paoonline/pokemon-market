/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { SlideContext, CartContext } from '../../../store'
import language from '../../../utils/language'
import { ButtonClosed } from '../../each/Button'
import { CartList } from '../CartList'
import { ButtonContinueToPayment } from '../../'

export const Slide = (): JSX.Element => {
    const { totalCardAmount, totalPrice } = useContext(CartContext)
    const { open, setOpen } = useContext(SlideContext)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={() => { setOpen(false) }}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-overlay-slide bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:w-396 w-full">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="pointer-events-auto relative w-screen max-w-md">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                    </div>
                                </Transition.Child>
                                <div className="flex h-full flex-col overflow-y-scroll bg-backgroundBlack py-6 shadow-xl">
                                    <div className="px-4 sm:px-6 flex flex-row justify-between">
                                        <Dialog.Title className="font-medium">
                                            <div>
                                                <div className='text-white font-semibold text-lg '>
                                                    {language.cart}
                                                </div>
                                                <div className='text-xs mt-1 text-gray-card'>
                                                    {language.clear_all}
                                                </div>
                                            </div>
                                        </Dialog.Title>

                                        <ButtonClosed />
                                    </div>
                                    <div className="relative mt-6 flex flex-row px-4 sm:px-6">
                                        <div className="flex-none w-14 h-14 text-white text-sm">
                                            {language.item}
                                        </div>
                                        <div className="grow h-14 text-white text-sm">
                                            {language.qty}
                                        </div>
                                        <div className="flex-none w-14 h-14 text-white text-sm">
                                            {language.price}
                                        </div>

                                    </div>

                                    <CartList />

                                    <div className="relative flex mt-4 flex-row px-4 ">
                                        <div className="flex-none w-14  text-xs text-gray-card grow">
                                            {language.total_card_amount}
                                        </div>
                                        <div className="flex-none w-14  text-white text-xs break-all">
                                            {totalCardAmount}
                                        </div>

                                    </div>

                                    <div className="relative flex mt-4 flex-row px-4 ">
                                        <div className="flex-none w-14  text-xs text-gray-card grow">
                                            {language.total_price}
                                        </div>
                                        <div className="flex-none w-16  text-white text-xs break-all">
                                            $ {totalPrice.toFixed(2)}
                                        </div>
                                    </div>

                                    <div className="relative mt-6 flex flex-row px-4">
                                        <ButtonContinueToPayment />
                                    </div>

                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}