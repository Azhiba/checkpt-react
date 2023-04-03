import React from 'react'
import"./about.css"
// import {Aboutvideo}from" ../assest/images/video.mp4"
function about() {
  return (
    <>
       
        <h1 className="title center">About</h1>
        <div className="img-desc">
           <div className="left">
           
               {/* <video src="Aboutvideo" autoplay loop></video>  */}
           </div>
            <div className="right">
                <h3>Nous voyageons pour chercher d'autres états, d'autres vies, d'autres, âmes.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam officiis atque, doloremque eos reprehenderit deleniti ipsum dicta aliquid .</p>
              
            </div>
        </div>
    </>
  )
}

export default about;
