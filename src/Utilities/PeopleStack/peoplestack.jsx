import './style.css';

export default function PeopleStack(props) {
    const url = "https://image.tmdb.org/t/p/w500" + props.image
    return (
    <div className="people">
        <img src={ url } alt={ props.name } /><br />
        <label>{ props.name }</label>
    </div>
  )
}