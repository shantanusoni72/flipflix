import './style.css';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <ul className="footer-row-1">
                    <img src='assets/logo.svg' alt='logo' />
                    <h3>Openflix</h3>
                    <p>Openflix is a netflix-inspired web application where users can browse, search and see reviews of movies and TV shows.</p>
                </ul>
                <ul className="footer-row-2">
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Watch</a>
                    </li>
                    <li>
                        <a href='#'>FAQs</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                </ul>
                <ul className="footer-row-3">
                    <li>
                        <a href='#'>Horror</a>
                    </li>
                    <li>
                        <a href='#'>Drama</a>
                    </li>
                    <li>
                        <a href='#'>Action</a>
                    </li>
                    <li>
                        <a href='#'>Comedy</a>
                    </li>
                </ul>
                <ul className="footer-row-4">
                    <li>
                        <a href='#'>Github</a>
                    </li>
                    <li>
                        <a href='#'>Website</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
