import { color } from '../../../utils/'

interface ButtonAble {
    callback?: (data: object) => object
}
export const ButtonCart = (props: ButtonAble): JSX.Element => {
    return (
        <button className="inline-flex  text-white items-center justify-center p-2 orange rounded-md shadow-lg" style={{ background: color.orange }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </button>
    )
}

