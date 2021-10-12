import React from 'react'

const Video_details = ({video}) => {

    if(!video){
        return <p>Loading....</p>
    }

    const videosrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return (
        
        <div className="video_detals">
            <div className="video_embed">
            <iframe title={video.snippet.title} src={videosrc}  width="100%" height="400px"/>
            </div>
            
            <div className="video_info">
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            </div>
            
        </div>
    )
}

export default Video_details
