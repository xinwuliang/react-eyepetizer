import React, { Component } from 'react'
import RelatedVideoDiv from '../../styled/RelatedVideo.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'
import {formatDuration} from '../../utils'

export default class RelatedVideo extends Component {
    static get propTypes() { 
        return { 
            videoList: PropTypes.array,
            detail: PropTypes.object,
            _this: PropTypes.object
        }
    }


     constructor (props) {
        super(props)
        this.state = {
            
        }
    }


    

    render() {
        const {videoList, detail, _this} = this.props
        
        
        
        let videoLists = null
        if(videoList) {
            console.log('videoList: ', videoList)
            videoLists = videoList.map((video, index) => {
                return (
                    <li key={index} className="video-list">
                        <img className="coverForFeed" src={video.coverForFeed} />
                        <div className="content" onClick={() => {_this.getDetail(video.id)}}>
                            <h3 className="title">{video.title}</h3>
                            <div className="meta"># {video.category} / {formatDuration(video.duration)}</div>
                        </div>
                    </li>
                )
            })
        }


        return (
            <RelatedVideoDiv>
               <ul className="video-lists">
                   {videoLists ? videoLists : null}
               </ul>
            </RelatedVideoDiv>
        )
    }
}
