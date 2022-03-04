import './Layout.css';
import { Navbar } from '../Navbar'

export const Layout = (props: any): JSX.Element => {
    return (
        <div className='paddingResponsive'>
            <Navbar />
        </div>
    )
}