import Button from '../../Utilities/Button/button';
import './style.css';

export default function Header() {
    return (<>
        <div className='header-container'>
            <div className="header">
                <div className="site-logo">
                    <img src='assets/logo.svg' alt='logo' />
                </div>
                <ul className='header-menu'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contribute</a>
                    </li>
                    <li>
                        <a href='#'>Watch</a>
                    </li>
                </ul>
                <div className="header-action">
                    <Button text='Watch' url='#' />
                </div>
            </div>
        </div>
    </>)
}
