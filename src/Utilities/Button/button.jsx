import './style.css';

export default function Button({ text, url }) {
    return (
        <div className='button'>
            <a href={url}>{text}</a>
        </div>
    )
}
