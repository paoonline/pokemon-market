import { InitProvider } from './InitContext'
import { SlideProvider } from './SlideContext'
import { ActionProvider } from './ActionContext'
import { CartProvider } from './CartContext'

interface childrenProps {
    children: object
}

export const CombineProvider = (props: childrenProps) => {
    return (
        <InitProvider >
            <ActionProvider>
                <CartProvider>
                    <SlideProvider>
                        {props.children}
                    </SlideProvider>
                </CartProvider>
            </ActionProvider>
        </InitProvider>
    )

}