import dashboard from '../../dashboard'

export default function Section1() {
    return (<>
        {
            dashboard.landing_page.sections.map((element) => (<>
                <div className="divider" />
                <div className="section-1">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 className="title">{element.title}</h2>
                                <h4 className="subTitle">{element.subtitle}</h4>
                            </div>
                            <div className="col">
                                <img className="presImg" src={element.image} alt={element.title} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider" />
            </>))
        }
    </>)
}