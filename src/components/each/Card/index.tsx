import { ButtonAddToCard } from "../Button"

export const Card = (): JSX.Element => {
    return (
        <div className='mt-12 sm:mt-0 bg-backgroundBlack w-full sm:w-44 h-176 flex flex-col rounded-2xl justify-around items-center mb-36 pl-3 pr-3'>
            <div className='absolute w-194 h-270 sm:h-142 sm:w-102 mb-82 sm:mb-60'>
                <img
                    style={{ backgroundRepeat: 'repeat-y' }}
                    src={'https://images.pokemontcg.io/pl3/1.png'}
                    alt={'test'}
                    className="w-full h-full object-center object-cover"
                />
            </div>

            <div className='text-white text-xs text-center mt-10 break-all relative top-3'>namenamenamenamenamenamenamename</div>

            <div className='text-gray-card text-xs text-center flex flex-row justify-around relative top-2 break-all'>
                $ 2.29
                <div className="ml-2 mr-2 break-all">{'\u2022'} </div>
                20 Cards
            </div>
            <div className="w-full pb-1">
                <ButtonAddToCard />
            </div>
        </div>
    )

}