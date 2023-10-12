import dashboard from '../dashboard'

export default function navbar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col" style={{ textAlign: "left", padding: 0 }}>
                    <div>
                        <a href="/"><img className="logo" src={ dashboard.landing_page.logo } alt="logo" /></a>
                    </div>
                </div>
                <div className="col" style={{ textAlign: "right" }}>
                    <div>
                        <a className="btn" href="/watch">{ dashboard.landing_page.watch_button }</a>&emsp;
                    </div>
                </div>
            </div>
        </div>
    )
}
