import { t, windowDimension } from '../../../utils/'
import { InputWithIcon } from '../../each/Input'
import { ButtonCart } from '../../each/Button'
import { Hr } from '../../each/Hr'

export const Navbar = (): JSX.Element => {
    const checkWidth = windowDimension()
    return (
        <>
            <div className="grid grid-rows-1 grid-flow-col gap-4">
                <div className='col-start-1 col-end-10 col-span-1'>
                    <div className='text-white text-xlnew font-semibold'>{t.logo}</div>
                </div>

                <div className='col-end-12 col-span-1 flex flex-row justify-end '>
                    {checkWidth.width > 768 && <div className='mr-5 mt-1'><InputWithIcon /></div>}
                    <ButtonCart />
                </div>
                {checkWidth.width < 768 && <div className='col-start-1 col-end-12 col-span-1 mt-2'>
                    <InputWithIcon />
                </div>
                }
                <div className='col-start-1 col-end-12 col-span-1 mt-2'>
                    <Hr />
                </div>
            </div>
        </>
    )
}