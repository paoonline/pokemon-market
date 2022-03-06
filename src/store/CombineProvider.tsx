import { InitProvider, SlideProvider } from './index'


interface childrenProps {
    children: object
}

export const CombineProvider = (props: childrenProps) => {
    return (
        <InitProvider >
            <SlideProvider>
                {props.children}
            </SlideProvider>
        </InitProvider>
    )

}