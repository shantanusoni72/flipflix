import { React, useState } from 'react'
import './style.css'
import RatingImage from '../../rating.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Catelog(props) {
    const url = "https://image.tmdb.org/t/p/w500/" + props.poster_path
    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = (event) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                }
                :
                null,
        );
    };

    const handleClose = () => {
        setContextMenu(null);
    };


    return (<>
        <div className='movie' onContextMenu={handleContextMenu}>
            <div>
                <p>{props.title} ({props.release_date})</p>
                <img className="ratingImg" src={RatingImage} alt="ratingImage" /><p>{props.vote_average}</p>
                <p>{props.overview}</p>
            </div>
            <div>
                <img src={url} alt={props.title} />
            </div>
            <div>
                <label>{props.title}</label>
            </div>
        </div>
        <Menu
            open={contextMenu !== null}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={
                contextMenu !== null
                    ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                    : undefined
            }>
            <MenuItem onClick={() => window.open("https://www.youtube.com/results?search_query="+props.title+"+trailer")}>Watch Trailer</MenuItem>
            <MenuItem onClick={() => window.open("https://www.imdb.com/find/?q="+props.title)}>Show IMDB Rating</MenuItem>
        </Menu>
    </>)
}
