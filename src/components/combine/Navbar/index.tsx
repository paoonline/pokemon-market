import { t, size, windowDimension } from '../../../utils/'
import { InputWithIcon } from '../../each/Input/InputWithIcon'
import { ButtonCart } from '../../each/Button/ButtonCart'
import { Hr } from '../../each/Hr/Hr'

export const Navbar = (): JSX.Element => {
    const checkWidth = windowDimension()
    return (
        <>
            <div className="grid grid-rows-4 grid-flow-col gap-4 p-5">
                <div className='col-start-1 col-end-10 col-span-1'>
                    <div className='text-white' style={{ fontSize: size.xl }}>{t.logo}</div>
                </div>

                <div className='col-end-12 col-span-1 flex flex-row justify-end '>
                    {checkWidth.width > 768 && <div className='mr-5 mt-1'><InputWithIcon /> </div>}
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