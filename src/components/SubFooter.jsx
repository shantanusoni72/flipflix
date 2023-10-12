import dashboard from '../dashboard'

export default function Sub_Footer() {
    return (<>
        <div className="end">
            <h5>{ dashboard.landing_page.faq.watch.title }</h5><br />
            <div style={{ backgroundColor: "black" }}>
                <a className="btn" href="/watch">{ dashboard.landing_page.faq.watch.btn_text }</a>
            </div>
        </div>
        <div className="divider" />
    </>)
}
