/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import { InitContext, ActionContext } from '../../../store'

export const Pagination = (): JSX.Element => {
    const initContext = useContext(InitContext)
    const actionContext = useContext(ActionContext)
    const { count, paginationPage, pageSize, totalCount, CardList } = initContext
    const { handlePagination } = actionContext

    return CardList.length >= 20 && count > 0 ? (
        <div className="bg-backgroundBlack px-4 py-3 flex items-center justify-between sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2  text-sm font-medium rounded-md text-white  hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2  text-sm font-medium rounded-md text-white  hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-white">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">{pageSize}</span> of{' '}
                        <span className="font-medium">{totalCount}</span> results
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <div
                            onClick={() => paginationPage - 1 > 0 ? handlePagination(paginationPage - 1) : {}}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        <div className='text-white px-2 py-2'>{paginationPage}</div>

                        <div
                            onClick={() => handlePagination(paginationPage + 1)}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md  text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    ) : <div></div>
}