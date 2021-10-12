import React from 'react'

const Video_list_item = ({ item_video, onVideoSelected }) => {

    console.log(item_video)
    return (
        <div onClick={()=>onVideoSelected(item_video)} className="video_list_item m-3">
            <div className="row">
                <div className="col-lg-3 video_img">
                    <img src={item_video.snippet.thumbnails.medium.url} alt="" />
                </div>
                <div className="col-lg-9">
                    <p>{item_video.snippet.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Video_list_item
