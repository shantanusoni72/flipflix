import React from 'react'

export default function Header() {
    return (
        <div>
            <div style={{ backgroundColor:"black", padding:18 }}>
                <img class="logo" src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-ae9c2.appspot.com/o/movie-thumb-imgs%2Flogo.png?alt=media&token=769404e3-8745-4120-9423-d8f48d1ac5a9" />&emsp;
                <div class="dropdown">&emsp;
                    <button class="browse_btn" type="button" > Browse↴</button>
                </div>&emsp;
                <img style={{hight:50, width:70}} src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-ae9c2.appspot.com/o/movie-thumb-imgs%2Fkids.png?alt=media&token=a129babb-cede-4406-bd9c-04eb28d5609a" />&emsp;
                <label style={{color:"white"}}>DVD</label>
            </div>
        </div>
    )
}
