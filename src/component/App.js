import React, { Component } from 'react'
import youtube from '../apis/youtube'
import Search from './Search'
import Video_details from './Video_details'
import Video_list from './Video_list'
import '../style.css'

export default class App extends Component {

    state = {ytvideos: [], selectedVideo: null}

    componentDidMount(){
        this.onSearchSubmit('Hindi sports news live')
    }

    onSearchSubmit = async (search) =>{
       
       const response = await youtube.get('/search', {
            params: {
                q: search
            }
        })
        this.setState({ytvideos: response.data.items,
            selectedVideo: response.data.items[0]
        })

    }

    onVideoSelected = (video)=>{
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="container ">
                <div className="text-center">
                    <img src="img/logo.jpg" alt="youtube_logo" height="100px" />
                </div>
                <Search  onSearchSubmit={this.onSearchSubmit} />
                <div className="video_sec">
                <div className="row">
                    <div className="col-lg-8 col-sm-6">
                        <Video_details video={this.state.selectedVideo}  />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Video_list onVideoSelected={this.onVideoSelected} ytvideos={this.state.ytvideos} />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
