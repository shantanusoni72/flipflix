import { React, useState } from 'react'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { FaRegCopy, FaEllipsisV } from 'react-icons/fa'
import './style.css'
import RatingImage from '../../rating.png'
import { RiSendPlaneFill, RiDeleteBin6Line } from 'react-icons/ri'

export default function Catelog(props) {
    const url = "https://image.tmdb.org/t/p/w500/" + props.poster_path
    const showYTtrailer = (title) => {
        window.open('https://youtube.com?q=' + title + '+trailer')
    }
    const showIMDBrating = (title) => {
        window.open('https://www.imdb.com/find/?q=' + title + '&ref_=nv_sr_sm')
    }
    const copyCoupon = (e, data) => {
        var coupon = data.copy
        navigator.clipboard.writeText(coupon)
        alert(`Coupon code ${coupon} copied to your clipboard`)
    }
    return (
        <>
            <ContextMenuTrigger id="contextmenu">
                <div className='movie'>
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
            </ContextMenuTrigger>
            <ContextMenu id="contextmenu">
                <MenuItem onClick={() => showYTtrailer(props.title)}>
                    <FaRegCopy className="copy" />
                    <span>Copy</span>
                </MenuItem>
                <MenuItem >
                    <FaEllipsisV className="openwith" />
                    <span>Open with</span>
                </MenuItem>
                <MenuItem>
                    <RiSendPlaneFill className="send" />
                    <span>Send</span>
                </MenuItem>
                <MenuItem>
                    <RiDeleteBin6Line className="delete" />
                    <span>Delete</span>
                </MenuItem>
            </ContextMenu>
        </>
    )
}
