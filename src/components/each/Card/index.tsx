import { ButttonAddToCard } from "../Button"

export const Card = (): JSX.Element => {
    return (
        <div className='bg-backgroundBlack w-44 h-176 flex flex-col rounded-2xl justify-around items-center mb-36'>
            <div className='absolute h-142 w-102 mb-60'>
                <img
                    style={{ backgroundRepeat: 'repeat-y' }}
                    src={'https://images.pokemontcg.io/pl3/1.png'}
                    alt={'test'}
                    className="w-full h-full object-center object-cover"
                />
            </div>

            <div className='text-white text-xs text-center mt-10'>name</div>

            <div>
                <div className='text-gray-card text-xs text-center mb-2'>$ 2.29 - 20 Cards</div>
                <ButttonAddToCard />
            </div>

        </div>
    )

}