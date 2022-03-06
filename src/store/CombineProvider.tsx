import { InitProvider } from './InitContext'
import { SlideProvider } from './SlideContext'
import { ActionProvider } from './ActionContext'

interface childrenProps {
    children: object
}

export const CombineProvider = (props: childrenProps) => {
    return (
        <InitProvider >
            <ActionProvider>
                <SlideProvider>
                    {props.children}
                </SlideProvider>
            </ActionProvider>
        </InitProvider>
    )

}