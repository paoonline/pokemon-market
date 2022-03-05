import './Layout.css';

interface LayoutAble {
    children: Object
}

export const Layout = (props: LayoutAble): JSX.Element => {
    return (
        <div className='paddingResponsive p-5'>
            {props.children}
        </div>
    )
}