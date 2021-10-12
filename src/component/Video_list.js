import React from 'react'
import Video_list_item from './Video_list_item'

const Video_list = ({ ytvideos, onVideoSelected }) => {
    console.log(ytvideos);
    return (
        <div>
        
            <ul>
                {
                    
                    ytvideos.map((item_video, index)=>{
                        return <Video_list_item onVideoSelected={onVideoSelected} key={index} item_video={item_video} />
                   
                    } )
                }
                
            </ul>
        </div>
    )
}

export default Video_list
