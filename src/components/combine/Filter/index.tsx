import { t } from '../../../utils/'
import { Dropdown } from '../../each/Dropdown'

export const Filter = (props: any): JSX.Element => {
    return (
        <div className='mt-5 grid grid-rows-1 grid-flow-col gap-4 items-center'>
            <div className='text-white text-lg col-start-1 col-end-5 col-span-1'>{t.choose_card}</div>

            <div className={`text-white text-lg  sm:col-start-5 col-start-1 col-end-12 col-span-1 
                flex flex-row  flex-wrap flex-grow md:justify-end`}>
                <Dropdown />
                <div className='ml-4'> <Dropdown /></div>
                <div className='ml-4'> <Dropdown /></div>
            </div>
        </div>
    )
}