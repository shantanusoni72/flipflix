import dashboard from '../dashboard'

export default function Carousel() {
    return (
        <div className="carousel">
            <p className="heading"><b>{ dashboard.landing_page.title }</b></p>
            <p className="subHeading"><b>{ dashboard.landing_page.subtitle }</b></p>
        </div>
    )
}
