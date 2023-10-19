import dashboard from '../dashboard'

export default function navbar() {
    return (
        <div className="navbar">
            <a href="/"><img className="logo" src={ dashboard.landing_page.logo } alt="logo" /></a>
            <a className="btn" id="btn-navbar" href="/watch">{ dashboard.landing_page.watch_button }</a>&emsp;
        </div>
    )
}
