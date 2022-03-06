/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface DropdownAble {
    name?: string;
    lists?: Array<string>
}

export const Dropdown = (props: DropdownAble): JSX.Element => {
    return (
        <Menu as="div" className="relative inline-block text-left">

            <Menu.Button disabled={props.name === 'Set' ? true : false} className={`disabled:opacity-75 flex-row flex items-center h-36 w-24 border-solid border-2 border-border-hover bg-backgroundBlack text-gray-400 inline-flex justify-center w-full rounded-md   shadow-sm  text-sm font-medium text-700 ${props.name !== 'Set' && 'hover:text-white'} focus:outline-none`}>
                {props.name}
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>


            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="z-50 border-solid border-2 border-border-hover  origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-backgroundBlack ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="">

                        {props.lists?.map((res, i) => {
                            return (
                                <Menu.Item key={res + '_' + i}>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-hover-dropdown text-white' : 'text-white border-b-2 border-border-hover',
                                                'block px-4 py-2 text-sm border-b-2 border-border-hover'
                                            )}
                                        >
                                            {res}
                                        </a>
                                    )}
                                </Menu.Item>
                            )
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}