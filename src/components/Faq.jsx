import dashboard from "../dashboard"

export default function Faq() {
    return (
        <div className="faq-1">
            <h1><b>{dashboard.landing_page.faq.title}</b></h1><br />
            {
                dashboard.landing_page.faq.content.map((element) => (
                    <div className="dropdown">
                        <button className="dropbtn">{element.question.title}</button>
                        <div className="dropdown-content">
                            <p>{element.question.content}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
